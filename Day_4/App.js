import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Flight/Login";
import Navbar from "./Flight/Nav";


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/navbar" element={<Navbar />} />
          <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}