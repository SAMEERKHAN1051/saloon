import { Link, NavLink } from "react-router-dom";
import data from "../json/link.json";
import React, { useState } from "react";


export default function Navbar() {
    const [falsy, setFalsy] = useState(true)
    function loginBtn() {
        setFalsy(false)
    }
    function closeBtn() {
        setFalsy(true)
    }
    const [link] = useState(data)
    const style = {
        borderBottom: "2px solid",
        color: "#cca876"
    };

    const navStyle = {
        backgroundColor: "#0f1c2a",
        margin: "0 -10px",
        borderRadius: "24px",
        padding: "16px"
    }
    const popUp = {
        display: falsy ? "none" : "flex",
        transform: "translateY(-8%)",
        backgroundColor: "rgb(11, 13, 23 , 0.6)",
        transition: "0.9s all ease 1ms"
    }
    const linkObj = link.map(x => (
        <li key={x.id} className={"nav-item ps-3"}>
            <NavLink className={({ isActive }) => isActive ? "fs-6 nav-link active" : "nav-link fs-6"} key={x.id} to={x.path}
                style={({ isActive }) => isActive ? style : null}
            >{x.title} &#9987;</NavLink>
        </li>)
    );

    return (
        <header>

            <nav className="navbar navbar-expand-lg nav sticky-top">
                <div className="container-fluid" >
                    <Link to="/" className="navbar-brand mx-5 logo">
                        <img style={{ height: 75 }} src="assets/logo.png" alt="" />
                    </Link>
                    <button
                        className="navbar-toggler navBtn"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNav"
                        aria-controls="navbarNav"
                        aria-expanded="false"

                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-center" id="navbarNav" style={navStyle}>
                        <ul className="navbar-nav">
                            {linkObj}
                            <li className="nav-item">
                                <button className="themeBtn" onClick={loginBtn} >Login in</button>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <div className="bgSection" style={popUp}  >
                <div className="mainLoginSection">
                    <div className="loginImg">
                        <img src="https://images.unsplash.com/photo-1521714161819-15534968fc5f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                    </div>
                    <div className="loginInput">
                        <button onClick={closeBtn} className="themeBtn closeBtn"><i className="fa-solid fa-xmark"></i></button>
                        <div className="inputText">
                            <h3>Log in and Stay Connected</h3>
                            <p>Our secure login process ensures the confidentiality of your information. Log in today and stay connected to your finances, anytime and anywhere.</p>
                            <form className="loginForm">
                                <input type="email" placeholder="Enter Email..." />
                                <input type="password" placeholder="Enter Password..." />
                                <div className="ForgotPassword">
                                    <p>Forgot Password?</p>
                                </div>
                                <button className="themeBtn">Login</button>
                            </form>
                            <div className="otherText">
                                <p>Don't Have An Account?<span> Register Now</span></p>
                                <p>By clicking Login you are agreeing with our</p>
                                <h5>Terms of Feature</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}

