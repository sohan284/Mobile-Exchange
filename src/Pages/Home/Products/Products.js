import React, { useEffect, useState } from 'react';
import { HashLoader } from 'react-spinners';
import Product from './Product';
const Products = () => {
    const [products,setProduct] = useState([]);
    const [search, setSearch] = useState('');
    const [pageCount, setPageCount] = useState(0);
    const [page,setPage] = useState()
    const [size ,setSize] =useState(10);
    useEffect(() => {
        fetch(`https://as-sunnah-venture.onrender.com/product?page=${page}&size=${size}`)
            .then(res => res.json())
            .then(data =>setProduct(data))

    }, [page , size])
    useEffect(() => {
        fetch(`https://as-sunnah-venture.onrender.com/productCount`)
            .then(res => res.json())
            .then(data =>{
                const count = data.count;
                const pages = Math.ceil(count/10);
                setPageCount(pages);
            })

    }, [])

    let loading;
    if (products.length === 0) {
        loading = <div data-aos="zoom-in" className='flex justify-center mt-10 items-center'>
            <HashLoader
          color="#004680"
          size={100}
        />
        </div>
    }

    return (
        <div>
            {loading}
            <div className='grid lg:grid-cols-2 sm:grid-cols-2 mt-3'>
                {
                    products.map(product => <Product key={product.id} search={search} product={product}></Product>)
                }
            </div>
        </div>
    );
};

export default Products;