import React, { useState } from 'react';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import useToken from '../../Hooks/useToken';
import Footer from '../../Shared/Footer';
import Header from '../../Shared/Header';
import Loading from '../../Shared/Loading';

const Signup = () => {
    const [signInWithGoogle,gUser] = useSignInWithGoogle(auth);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const location = useLocation();
    const [password, setPassword] = useState('');
    const [cPassword, setCPassword] = useState('');
    let errorMessage;
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);
    let from = location.state?.from?.pathname || "/";

    const navigate = useNavigate();
    const handleLogin = () => {
        navigate('/login');

    }
    const [token] = useToken(user || gUser)

    const handleSingUp = () =>{
        if(/@g(oogle)?mail\.com$/.test(email) && password === cPassword){
            createUserWithEmailAndPassword(email,password)
        }
    }
    
    if(token){ 
            navigate(from,{replace:true})     
    }

      if (error) {
        errorMessage = <p className='text-[red] font-semibold my-3 text-sm'>Please enter valid information.</p>
      }
      if (loading) {
     return <div className='flex justify-center h-screen items-center'>
       <Loading></Loading>
      </div>
      }
    return (
        <div>
           <Header></Header>
           <div   className='flex border my-10 rounded container mx-auto'>
     
          <div className='text-primary w-full  rounded p-8 mt-5 shadow-lg'>
            <div>
                        <form>
                            <h1 className='text-3xl text-center font-bold mb-5'>Create Account</h1>

                            <h6 className='text-sm font-semibold '>Your Name</h6>
                            <input className='w-full formInput' 
                            type="text"
                            value={name} 
                            required
                            onChange={(e)=>setName(e.target.value)}
                            placeholder='Name' />
                           
                            <h6 className='text-sm  font-semibold mt-5'>Email</h6>
                            <input className='w-full formInput' 
                            type="text"
                            value={email} 
                            required
                            onChange={(e)=>setEmail(e.target.value)}
                            placeholder='Email' />
                            
                            <h6 className='text-sm font-semibold mt-5'>Password</h6>
                            <input  required className='w-full formInput' 
                            type="password"
                            value={password} 
                            onChange={(e)=>setPassword(e.target.value)}
                            placeholder='Password' />

                            <h6 className='text-sm font-semibold mt-5'>Re-enter Password</h6>

                            <input className='w-full formInput' type="password"
                            value={cPassword} 
                            required
                            onChange={(e)=>setCPassword(e.target.value)}
                            placeholder='re-password' />
                            <br />
                            <button onClick={handleSingUp} className='w-full button text-white font-bold rounded p-1 mt-5'>Signup</button>
                            {errorMessage}
                        </form>
                        <div className=" mt-5" ><small>Already have an account? <span onClick={handleLogin} className='font-semibold text-[yellow] lgin' > Log-In</span></small> </div>
                       
                    </div>
                    
                    <div className="divider my-3" ><small>OR</small></div>
                    <button onClick={() => signInWithGoogle()} className=' shadow-lg w-full rounded p-1 font-semibold cBtn'>
                        <div className='flex justify-center items-center'>
                            <div><img className='w-10' src="https://i.ibb.co/Qj5082F/images-removebg-preview.png" alt="" /></div>
                            <div className='font-bold text-black'>Continue With Google</div>
                        </div></button>
                  
                   

                </div>

            </div>
            <Footer></Footer>
        </div>

    );
};

export default Signup;