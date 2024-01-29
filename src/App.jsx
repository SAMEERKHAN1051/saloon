import About from "./page/About";
import Contact from "./page/Contact";
import Blog from "./page/Blog";
import Find from "./page/Find";
import Service from "./page/Service";
import Home from "./page/Home";
import Footer from "./page/Footer";
import Navbar from "./page/Navbar";
import Login from "./page/Login"
import './Main.css'

import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";


function App() {

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/find" element={<Find />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Service/>} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/Login" element={<Login />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App;
