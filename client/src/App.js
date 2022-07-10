import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import AddBook from "./pages/AddBook";
import Cart from "./pages/cart";
import Complain from "./pages/Complain";
import DetailBook from "./pages/DetailBook";
import LandingPage from "./pages/LandingPage";
import Profile from "./pages/profile";
import Transaction from "./pages/transaction";
import PublicNavbar from "./components/navbar/PublicNavbar";
import Login from "./components/landing page/Login";
import Register from "./components/landing page/Register";
import AdminNavbar from "./components/navbar/AdminNavbar";
import AdminComplain from "./pages/AdminComplain";

function App() {
  return (
    
      <Routes>
        <Route path="/" element={<LandingPage/>}/>
        <Route path="/detail-book" element={<DetailBook/>}/>
        <Route path="/profile" element={<Profile/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/transaction" element={<Transaction/>}/>
        <Route path="/add-book" element={<AddBook/>}/>
        <Route path="/complain" element={<Complain/>}/>
        <Route path="/admin-complain" element={<AdminComplain/>}/>
        <Route path="/public" element={<AdminNavbar/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
      </Routes>

  );
}

export default App;
