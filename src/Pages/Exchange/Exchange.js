import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import useAdmin from '../../Hooks/useAdmin';
import Footer from '../../Shared/Footer';
import Header from '../../Shared/Header';
import { BsFillCartPlusFill } from 'react-icons/bs';


const Exchange = () => {
    const { productId } = useParams();
    const [product, setProduct] = useState({});
    const [setQuantity] = useState();
    const [user] = useAuthState(auth);
    const [admin] =useAdmin(user);
    const navigate = useNavigate();


    useEffect(() => {
        const url = `https://as-sunnah-venture.onrender.com/product/${productId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setProduct(data))
    })
    let errorMessage;
    const percentage = parseInt(product.discount);
    const discountPrice = (percentage / 100) * product.price;
    const previousPrice = parseInt(product.price - discountPrice);


    let productQuantity;
    if (product.quantity > 0) {
        productQuantity = product.quantity;
    }
    else productQuantity = <p className='inline text-[#ff0000c4]'>Out of stock</p>

    const increase = event => {
        const val = document.getElementById('quantity_value').value;
        const intVal = parseInt(val);

        if (intVal >= 0) {
            const increaseQuantity = parseInt(val) + 1;
            document.getElementById('quantity_value').value = parseInt(increaseQuantity);

        }

    }
    const decrease = () => {
        const val = document.getElementById('quantity_value').value;
        if (val > 0) {
            const increaseQuantity = parseInt(val) - 1;
            document.getElementById('quantity_value').value = parseInt(increaseQuantity);
        }

    }
    
    const delivered = (id) => {
    navigate(`/checkout/${id}`)
}

    const handleAddtoCart = () => {

        const orderQuantity = 1
  
            const availableQuantity = product.quantity - orderQuantity;
            const updateQuantity = { availableQuantity };
            
            fetch(`https://as-sunnah-venture.onrender.com/product/${productId}`, {
                method: 'PUT',
                headers: {
                    'content-type': "application/json"
                },
                body: JSON.stringify(updateQuantity)
            })
                .then(res => res.json())
                .then(data => {
                    setQuantity(data);
                })

        
        const newCart = {
            "_id" : product._id,
            "user" : user.email,
            "name" : product.name,
            "price" : product.price,
            "brand_name" : product.disc.brand_name,
            "place_origin" : product.disc.place_origin,
            "img" : product.img,
            "orderQuantity" : orderQuantity
        }
        fetch('https://as-sunnah-venture.onrender.com/cart', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newCart)
        })
            .then(res => res.json())
            .then(data =>
                toast.success(`${orderQuantity} Items Added to cart`)
            )
          
    }
    const handleCustomise = (id) =>{
        navigate(`/manageProduct/${id}`)
    }

    return (
        <div>
            <Header></Header>
            <section class="text-primary body-font overflow-hidden">
  <div class="px-5 py-24 mx-auto">
    <div class="lg:w-4/5 mx-auto flex flex-wrap">
    <img className=' p-12' src={product.img} alt="" /> <div class="lg:w-1/2  lg:pl-10 lg:py-6 mt-6 lg:mt-0">
        <h2 class="text-sm title-font text-gray-500 tracking-widest">NAME</h2>
        <h1 class="text-primary text-3xl title-font font-medium mb-1">{product.name}</h1>
        <div class="flex mb-4">
          <span class="flex text-blue-500 items-center">
           get Us
          </span>
          <span class="flex ml-3 pl-3 py-2 border-l-2 border-gray-200">
            <a href='https://www.facebook.com/SrSohan2748' target='blank' class="text-blue-500 ">
              <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
              </svg>
            </a>
           
            <a href='http://localhost:3000/contactus' class="ml-2 text-blue-500">
              <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
              </svg>
            </a>
          </span>
        </div>
        <p class="leading-relaxed">Fam locavore kickstarter distillery. Mixtape chillwave tumeric sriracha taximy chia microdosing tilde DIY. XOXO fam indxgo juiceramps cornhole raw denim forage brooklyn. Everyday carry +1 seitan poutine tumeric. Gastropub blue bottle austin listicle pour-over, neutra jean shorts keytar banjo tattooed umami cardigan.</p>
        <div class="flex mt-6 items-center pb-5 border-b-2 border-gray-200 mb-5">
          <div class="flex">
            <span class="mr-3">Color</span>
          
          </div>
          <div class="flex ml-6 items-center">
            <span class="mr-3">Size</span>
            <div class="relative">
           
              <span class="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4" viewBox="0 0 24 24">
                  <path d="M6 9l6 6 6-6"></path>
                </svg>
              </span>
            </div>
          </div>
        </div>
        <div class="flex">
          <span class="title-font font-medium text-2xl text-error">${product.price}</span>
          {!admin.admin &&
        <button onClick={handleAddtoCart} class="flex ml-auto button rounded text-primary font-semibold text-center border-0 py-2 px-6">Add to Cart <BsFillCartPlusFill className='text-xl ml-2'/>  </button>
          }
          {admin.admin &&
        <button onClick={handleCustomise} class="flex ml-auto button rounded text-primary border-0 py-2 px-6">Customise</button>
          }
          
        </div>
      </div>
    </div>
  </div>
</section>
     
            <Footer></Footer>
        </div>
    );
};

export default Exchange;
