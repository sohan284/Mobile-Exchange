
import { Link, Outlet } from 'react-router-dom';
import Footer2 from '../../Shared/Footer2';
import React from 'react';
import Header from './../../Shared/Header';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import useAdmin from '../../Hooks/useAdmin';
import Banner from '../../Shared/Banner';
import Products from './Products/Products';


const Home = () => {
    const [user] = useAuthState(auth);
    const [admin] = useAdmin(user);

    return (
        <div className=' mx-auto container'>
            <Banner></Banner>
            <Products></Products>
            <Footer2></Footer2>

        </div>
    );
};

export default Home;