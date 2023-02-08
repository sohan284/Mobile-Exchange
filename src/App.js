
import {
  Route, Routes
} from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import Exchange from "./Pages/Exchange/Exchange";
import Cart from './Pages/Cart/Cart';
import Checkout from './Pages/Cart/Checkout';
import MyOrder from './Pages/Cart/MyOrder';
import AddProduct from './Pages/Home/Admin/AddProduct';
import AllOrders from './Pages/Home/Admin/AllOrders';
import ManageProduct from './Pages/Home/Admin/ManageProduct';
import UpdateProduct from './Pages/Home/Admin/UpdateProduct';
import Users from './Pages/Home/Admin/Users';
import ContactUs from './Pages/Home/ContactUs';
import Home from './Pages/Home/Home';
import Products from './Pages/Home/Products/Products';
import SearchContainer from './Pages/Home/SearchContainer';
import Login from './Pages/Login/Login';
import RequireAdmin from './Pages/Login/RequireAdmin';
import RequireAuth from './Pages/Login/RequireAuth';
import Signup from './Pages/Login/Signup';
import UserProfile from './Pages/UserProfile/UserProfile';
import CheckoutOne from './Pages/Exchange/CheckoutOne';

function App() {
  return (
    <div className="px-auto">
      <hr />
      <Routes>
        <Route path="/" element={<Home></Home>}>
          <Route index element={<Products></Products>}></Route>
          <Route path='search' element={<SearchContainer></SearchContainer>}></Route>
          <Route path='/addProduct' element={
            <RequireAdmin>
              <AddProduct></AddProduct>
            </RequireAdmin>
          }></Route>

          <Route path='/manageProduct' element={
            <RequireAdmin>
              <ManageProduct></ManageProduct>
            </RequireAdmin>
          }></Route>

          <Route path='/manageUsers' element={
            <RequireAdmin>
              <Users></Users>
            </RequireAdmin>
          }></Route>

          <Route path='/allOrders' element={
            <RequireAdmin>
              <AllOrders></AllOrders>
            </RequireAdmin>
          }></Route>
        </Route>
        <Route path='/myOrder' element={
          <MyOrder></MyOrder>
        }></Route>
        <Route path='contactus' element={<ContactUs></ContactUs>}></Route>
        <Route path='checkout' element={<Checkout></Checkout>}></Route>
        <Route path='/manageProduct/:productId' element={
          <RequireAdmin>
            <UpdateProduct></UpdateProduct>
          </RequireAdmin>
        }></Route>
        <Route path='/Exchange/:productId' element={
          <RequireAuth>
            <Exchange></Exchange>
          </RequireAuth>
        }></Route>

        <Route path='/checkout/:productId' element={
          <RequireAuth>
            <CheckoutOne></CheckoutOne>
          </RequireAuth>
        }></Route>
        <Route path='/cart' element={
          <RequireAuth>
            <Cart></Cart>
          </RequireAuth>
        }></Route>
        <Route path='userprofile' element={<UserProfile></UserProfile>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<Signup></Signup>}></Route>



      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
