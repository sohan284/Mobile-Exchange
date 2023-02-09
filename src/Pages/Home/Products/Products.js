import React, { useEffect, useState } from 'react';
import { HashLoader } from 'react-spinners';
import Product from './Product';
const Products = () => {
    const [products,setProduct] = useState([]);
    const [search, setSearch] = useState('');

   
    useEffect(() => {
        fetch(`https://mobile-exchange.onrender.com/product`)
            .then(res => res.json())
            .then(data =>setProduct(data))

    }, [])
  

    let loading;
    if (products.length === 0) {
        loading = <div   className='flex justify-center mt-10 items-center'>
            <HashLoader
          color="#004680"
          size={100}
        />
        </div>
    }

    return (
        <div>
            {loading}
            <div className='grid lg:grid-cols-3 gap-5 container mx-auto sm:grid-cols-2 mt-3'>
                {
                    products.map(product => <Product key={product.id} search={search} product={product}></Product>)
                }
            </div>
        </div>
    );
};

export default Products;