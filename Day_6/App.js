import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Flight/Login";
import Navbar from "./Flight/Nav";
import Signup from "./Flight/Signup";
import Main from "./Flight/Home";
import Footer from "./Flight/Footer";
import CustomerService from "./Flight/Faq";


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Navbar />} />
          <Route path="/main" element={<Main />} />
          <Route path="/faq" element={<CustomerService />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup/>} />
          <Route path="/footer" element={<Footer />} />
      </Routes>
    </BrowserRouter>
  );
}