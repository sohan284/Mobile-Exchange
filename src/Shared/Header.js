import { signOut } from 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from "react-router-dom";
import useAdmin from '../Hooks/useAdmin';
import auth from './../firebase.init';

const Header = () => {
  const navigate = useNavigate();
  const [user] = useAuthState(auth);
  const [admin] = useAdmin(user);
  const navigateToHome = () => {
    navigate('/');
  }
  const logout = () => {
    signOut(auth);
    localStorage.removeItem('accessToken');
  }
  return (
    <div   className="navbar mx-auto ">
      <div className="navbar ">
  <div className="navbar-start">
    <button onClick={navigateToHome} className="navbar-start btn btn-accent border-none w-56 bg-transparent">
        <span className='text-4xl text-primary font-extrabold font-serif'>E</span> <img  className='w-12' src="https://i.ibb.co/KNv2VgZ/527-5274855-replace-icon-change-icon-removebg-preview.png" alt="" /> <span className='text-2xl text-primary font-extrabold font-serif'>mobile</span>
      </button>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className=" px-1">
    {!admin.admin &&
          <ul>
            <li className='btn bg-transparent btn-info btn-sm mx-2 text-primary border-none'><Link to={'/'}><div>Home</div></Link></li>
            <li className='btn bg-transparent btn-info btn-sm mx-2 text-primary border-none'><Link to={'/cart'}><div>Cart</div></Link></li>
            <li className='btn bg-transparent btn-info btn-sm mx-2 text-primary border-none'><Link to={'/myorder'}><div>My Orders</div></Link></li>
            <li className='btn bg-transparent btn-info btn-sm mx-2 text-primary border-none'><Link to={'/contactus'}><div>Contact Us</div></Link></li>
          </ul>
        }
        {admin.admin &&
          <ul>
            <li className='btn bg-transparent btn-info btn-sm mx-2 text-primary border-none'><Link to={'/allOrders'}><div>All Orders</div></Link></li>
            <li className='btn bg-transparent btn-info btn-sm mx-2 text-primary border-none'><Link to={'/addproduct'}><div>Add Product</div></Link></li>
            <li className='btn bg-transparent btn-info btn-sm mx-2 text-primary border-none'><Link to={'/allOrders'}><div>Manage Product</div></Link></li>
            <li className='btn bg-transparent btn-info btn-sm mx-2 text-primary border-none'><Link to={'/allOrders'}><div>Manage Users</div></Link></li>
          </ul>
        }
    </ul>
  </div>
  <div className='flex navbar-end hidden lg:flex'>
          {!user &&
            <button className='btn bg-success btn-success btn-sm mx-2 text-primary border-none'><Link to={'/login'}><div>Login</div></Link></button>
          }
          {user &&
            <button className='btn bg-error btn-error btn-sm mx-2 text-primary border-none' onClick={logout}><div>Logout</div></button>
          }

        </div>
 
</div>
<div className="dropdown dropdown-left">
      <label tabIndex={0} className="btn btn-info bg-transparent text-white lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-secondary rounded-box w-52">
      {!admin.admin &&
          <ul>
            <li className='btn bg-transparent btn-info btn-sm mx-2 text-primary border-none'><Link to={'/'}><div>Home</div></Link></li>
            <li className='btn bg-transparent btn-info btn-sm mx-2 text-primary border-none'><Link to={'/cart'}><div>Cart</div></Link></li>
            <li className='btn bg-transparent btn-info btn-sm mx-2 text-primary border-none'><Link to={'/myorder'}><div>My Order</div></Link></li>
            <li className='btn bg-transparent btn-info btn-sm mx-2 text-primary border-none'><Link to={'/contactus'}><div>Contact Us</div></Link></li>
            {!user &&
            <li className='btn bg-success btn-success btn-sm mx-2 text-primary border-none'><Link to={'/login'}><div>Login</div></Link></li>
          }
          {user &&
            <li className='btn bg-error btn-error btn-sm mx-2 text-primary border-none' onClick={logout}><div>Logout</div></li>
          }
          </ul>
        }
         {admin.admin &&
          <ul>
            <li className='btn bg-transparent btn-info btn-sm mx-2 text-primary border-none'><Link to={'/allOrders'}><div>All Orders</div></Link></li>
            <li className='btn bg-transparent btn-info btn-sm mx-2 text-primary border-none'><Link to={'/addproduct'}><div>Add Product</div></Link></li>
            <li className='btn bg-transparent btn-info btn-sm mx-2 text-primary border-none'><Link to={'/allOrders'}><div>Manage Product</div></Link></li>
            <li className='btn bg-transparent btn-info btn-sm mx-2 text-primary border-none'><Link to={'/allOrders'}><div>Manage Users</div></Link></li>
            {!user &&
            <li className='btn bg-success btn-success btn-sm mx-2 text-primary border-none'><Link to={'/login'}><div>Login</div></Link></li>
          }
          {user &&
            <li className='btn bg-error btn-error btn-sm mx-2 text-primary border-none' onClick={logout}><div>Logout</div></li>
          }
          </ul>
        }
        
      </ul>
    </div>


      
    </div>
  );
};


export default Header;