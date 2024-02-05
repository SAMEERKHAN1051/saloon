import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar"
import Footer from "./Footer"
export default function SalonLayout() {
    return (
        <>
        <Navbar/>
        <Outlet/>
        <Footer/>
        </>
    )
}