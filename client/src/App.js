import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom"
import AddBook from "./pages/AddBook";
import Cart from "./pages/cart";
import Complain from "./pages/complain/complain";
import DetailBook from "./pages/DetailBook";
import LandingPage from "./pages/LandingPage";
import Profile from "./pages/profile";
import Transaction from "./pages/transaction";
// import PublicNavbar from "./components/navbar/PublicNavbar";
import AdminNavbar from "./components/navbar/AdminNavbar";
import AdminComplain from "./pages/complain/admincomplain";
import CustomerLogin from "./pages/CustomerLogin";
import UpdateBook from "./pages/updateBook";

import { API, setAuthToken } from './config/api'
import { useContext, useEffect } from 'react'
import { UserContext } from './context/userContext';
import ListBook from "./pages/listBook";
import EditBook from "./pages/EditBook";

// init token on axios every time the app is refreshed
if (localStorage.token) {
  setAuthToken(localStorage.token);
}

function App() {
  let navigate = useNavigate();

  const [state, dispatch] = useContext(UserContext);

  useEffect(() => {
    // Redirect Auth
    if (state.isLogin == false) {
      navigate("/");
    } else {
      if (state.user.role == "admin") {
        navigate("/transaction");
      } else   {
        navigate("/");
      }
    }
  }, [state]);

  const checkUser = async () => {
    try {
      const response = await API.get("/check-auth");

      // If the token incorrect
      if (response.status === 404) {
        return dispatch({
          type: "AUTH_ERROR",
        });
      }

      console.log(response);

      // Get user data
      let payload = response.data.data.user;
      // Get token from local storage
      payload.token = localStorage.token;

      // Send data to useContext
      dispatch({
        type: "USER_SUCCESS",
        payload,
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    checkUser();
  }, []);

  return (
    
      <Routes>
      <Route path="/" element={<LandingPage/>}/>
     
        <Route path="/detail-book/:id" element={<DetailBook/>}/>
        <Route path="/profile" element={<Profile/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/customer-login" element={<CustomerLogin/>}/>
        <Route path="/complain" element={<Complain/>}/>
        <Route path="/updated-book" element={<UpdateBook/>}/>        
        <Route path="/transaction" element={<Transaction/>}/>
        <Route path="/add-book" element={<AddBook/>}/>
        <Route path="/books" element={<ListBook/>} />
        <Route path="/edit-book/:id" element={<EditBook/>} />
        <Route path="/admin-complain" element={<AdminComplain/>}/>
      </Routes>

  );
}

export default App;