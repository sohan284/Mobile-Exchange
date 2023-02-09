import { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { AiFillDelete } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Header from '../../Shared/Header';
import Footer from './../../Shared/Footer';



const Cart = () => {
    const [items, setItem] = useState();
    const [user] = useAuthState(auth);
    const navigate = useNavigate();
    let totalAmount = 0;

    useEffect(() => {
        fetch(`https://mobile-exchange.onrender.com/cart/${user?.email}`)
            .then(res => res.json())
            .then(data => setItem(data))
    })
    const handleDeleteCart = (id) => {
        fetch(`https://mobile-exchange.onrender.com/cart/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    const remaining = items.filter(cartItem => cartItem._id !== id);
                    setItem(remaining);

                }

            })

    }
    if (items) {
        for (const item of items) {
            const productTotal = item.price * item.orderQuantity;
            totalAmount = totalAmount + productTotal;
        }
    }
    const handleCheckout = () =>{
        if(items.length > 0){
            navigate('/checkout')
        }
        
        
    }


    return (
        <div>
            <Header></Header>
           
            <div className='flex justify-center container mt-20 h-screen mx-auto'>
                <div className=' w-full shadow-2xl mx-5'>
                    <div   className='flex justify-between shadow-lg  bg-secondary p-1 text-primary font-semibold text-xl'>
                        <h1 className='pr-20'>Cart</h1>
                        <h1>{items?.length} Items</h1>
                    </div>
                    <table   class=" text-primary w-full">
                        <thead>
                            <tr>
                                <th>No</th>
                                <th></th>
                                <th>Product Name</th>
                                <th></th>
                                <th>Price</th>
                                <th></th>
                            </tr>
                        </thead>
                        {
                            items?.map((item, index) => <tbody>
                                <tr>
                                    <th className='bg-secondary'>
                                        <label>
                                            <h1>{index + 1}</h1>
                                        </label>
                                    </th>
                                    <td className='bg-secondary h-16'>
                                        <div class="flex items-center space-x-3">
                                            <div class="">
                                                <div class="mask mask-squircle w-10 h-10">
                                                    <img src={item.img} alt="" />
                                                </div>
                                            </div>
                                            
                                        </div>
                                    </td>
                                    <td className='bg-secondary pl-[5px]'>
                                        {item.name}
                                        <br />
                                    </td>
                                    <td className='bg-secondary'>
                                        <p className=' font-semibold'></p>
                                    </td>

                                    <td className='bg-secondary'>
                                        <p className='text-[#e7c298] font-semibold'>{item.price * item.orderQuantity}</p>
                                    </td>
                                    <th className='bg-secondary'>  <div className='flex justify-center'>
                                        <h4 onClick={() => handleDeleteCart(item._id)} className='btn text-error  text-2xl btn-circle btn-sm  border-none  '><AiFillDelete></AiFillDelete></h4>
                                    </div>
                                    </th>
                                </tr>
                                
                                <hr />
                            </tbody>)
                        }
                     
                        <tbody className='border-t-4'>
                            
                        <td></td>
                        <td></td>
                        <td></td>
                        <td className='font-bold mt-10 text-xl'>Total</td>
                       <td>
                         <div className='mt-2'>
                         <p className='text-[#cdfffb] text-xl font-bold font-serif'><h1>= {totalAmount}</h1></p>
                        </div>
                        </td>
                       <td>
                         <button onClick={handleCheckout} className='btn btn-sm mt-2 button'>Proceed Checkout</button>
                        </td>
                        </tbody>
                        
                    </table>
                  


                </div>

            </div>

            <hr className='my-5 mt-20' />
            <Footer></Footer>

        </div>
    );
};

export default Cart;