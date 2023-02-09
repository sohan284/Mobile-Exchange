import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import Header from '../../Shared/Header';
import auth from './../../firebase.init';
import Footer from './../../Shared/Footer';

const MyOrder = () => {
    const [orders,setOrder] = useState()
    const [user] = useAuthState(auth);

    useEffect(() => {
        fetch(`https://mobile-exchange.onrender.com/order/${user?.email}`)
            .then(res => res.json())
            .then(data => setOrder(data))
    })
    return (
        <div>
            <Header></Header>
            <hr className='my-3'/>
            <div>
            <div>
            <div   class="overflow-x-auto container border h-screen mt-5 mx-auto w-full">
                <table class="table  w-full">
                    <thead>
                        <tr>
                            <th className='bg-transparent text-primary border' ></th>
                            <th className='bg-transparent text-primary border'>Product</th>
                            <th className='bg-transparent text-primary border'>Address</th>
                            <th className='bg-transparent text-primary border'>Number</th>
                            <th className='bg-transparent text-primary border'>Amount</th>
                            <th className='bg-transparent text-primary border'></th>
                        </tr>
                    </thead>
                    {
                        orders?.map((order,index) => <tbody>
                            <tr>
                                <th className='bg-transparent text-primary'>
                                    <label>
                                        <h1>{index + 1}</h1>
                                    </label>
                                </th>
                                <td className='bg-transparent text-primary'>
                                    {
                                        order?.order?.map(o => <div>
                                           <div className='flex items-center my-3'>
                                           <img className='w-10 rounded-full' src={o.img} alt="" />
                                            <h1 className='ml-2 font-semibold text-xs'>{o.name} ( x{o.orderQuantity || 1} )</h1>  
                                           </div>
                                        </div>)
                                    }

                                </td>
                                <td className='bg-transparent text-primary'>
                                    <div class="flex items-center space-x-3">
                                               {order.Address},{order.district},{order.country}
                                    </div>
                                </td>
                                <td className='bg-transparent text-primary'>
                                    {order.number}
                                    <br />
                                </td>
                                <td className='bg-transparent text-primary'>
                                    <h1 className='text-red-600 font-semibold'>{order.Payable}TK</h1>
                              </td>
                                <th className='bg-transparent text-primary'>
                                </th>
                            </tr>
                            <br />
                        </tbody>)
                    }
                </table>
            </div>
        </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default MyOrder;