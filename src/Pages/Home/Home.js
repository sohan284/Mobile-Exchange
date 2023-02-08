
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import useAdmin from '../../Hooks/useAdmin';
import Banner from '../../Shared/Banner';
import Footer from '../../Shared/Footer';
import Products from './Products/Products';


const Home = () => {
    const [user] = useAuthState(auth);
    const [admin] = useAdmin(user);

    return (
        <div>
            <Banner></Banner>
            <Products></Products>
            <Footer></Footer>

        </div>
    );
};

export default Home;