import React, { useState } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Footer from '../../Shared/Footer';
import Header from '../../Shared/Header';
import Loading from '../../Shared/Loading';
const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const location = useLocation();
  let errorMessage;
  const [
    signInWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useSignInWithEmailAndPassword(auth);
  let from = location.state?.from?.pathname || "/";

  const handleSignup = () => {
    navigate('/signup');

  }
  if (user) {
    navigate(from, { replace: true });
    
  }
  if (error) {
    errorMessage = <p className='text-[red] my-3 font-semibold text-xs'>Email or password you've entered is incorrect.</p>
  }
  if (loading) {
    return <div className='flex justify-center h-screen items-center'>
    <Loading></Loading>
  </div>
  }
  return (
    <div>
      <Header></Header>
      <div   className='flex my-5 border rounded container mx-auto'>
     
          <div className='text-primary w-full  rounded p-8 mt-5 shadow-lg'>
            <div>
              <h1 className='text-3xl text-center font-bold mb-7'>Login</h1>
              <h6 className='text-sm font-semibold '>Your Email</h6>
              <input className='w-full formInput'
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder='Email'
              />

              <h6 className='text-sm font-semibold mt-5'>Password</h6>
              <input className='w-full formInput'
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder='Password' />
              <br />
              <button onClick={() => signInWithEmailAndPassword(email, password)} className=' button w-full text-white font-bold rounded p-1 mt-5'> Login</button>

            </div>
            {errorMessage}
            <div className="divider text-primary my-8" ><small>New User ?</small></div>
          <button onClick={handleSignup} className=' shadow-lg w-full p-1  cBtn text-black rounded'>Create Your account</button>

          </div>
         
        

      </div>
      <Footer></Footer>
    </div>
  );
};

export default Login;