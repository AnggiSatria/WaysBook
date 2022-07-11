import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import AddBook from "./pages/AddBook";
import Cart from "./pages/cart";
import Complain from "./pages/Complain";
import DetailBook from "./pages/DetailBook";
import LandingPage from "./pages/LandingPage";
import Profile from "./pages/profile";
import Transaction from "./pages/transaction";
import PublicNavbar from "./components/navbar/PublicNavbar";
import AdminNavbar from "./components/navbar/AdminNavbar";
import AdminComplain from "./pages/AdminComplain";
import CustomerLogin from "./pages/CustomerLogin";
import PrivateRouteAdmin from "./Private/PrivateRoute";
import User from "./Private/Customer";

function App() {
  return (
    
      <Routes>

        <Route path="/" element={<LandingPage/>}/>

        {/* only for users */}

        <Route path="/" element={<User/>}>
          <Route path="/detail-book" element={<DetailBook/>}/>
          <Route path="/profile" element={<Profile/>}/>
          <Route path="/cart" element={<Cart/>}/>
          <Route path="/complain" element={<Complain/>}/>
        </Route>

        {/* only for admin */}

        <Route path="/" element={<PrivateRouteAdmin/>}>
          <Route path="/add-book" element={<AddBook/>}/>
          <Route path="/admin-complain" element={<AdminComplain/>}/>
          <Route path="/transaction" element={<Transaction/>}/>
        </Route>  
        
        <Route path="/public" element={<AdminNavbar/>}/>
        <Route path="/customer-login" element={<CustomerLogin/>}/>
      </Routes>

  );
}

export default App;
