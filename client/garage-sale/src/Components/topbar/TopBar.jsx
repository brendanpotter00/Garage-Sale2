import "./topbar.css";
import profile from "./profile.png";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../context/Context";

import React from 'react'

export default function TopBar() {
    const { user, dispatch } = useContext(Context);
    const PF = "http://localhost:5000/images/"
    
    const handleLogout = () => {
        dispatch({ type: "LOGOUT" });
    };

    return (
        <div className="top">
            <div className="topLeft">
                
                <a href="https://www.instagram.com/phisigmachi/"> 
                    <i className="topIcon fab fa-facebook-square"/> 
                </a>
                <a href="https://www.instagram.com/phisigmachi/"> 
                    <i className="topIcon fab fa-instagram"/> 
                </a>
                <a href="https://phisigschi.wixsite.com/home"> 
                    <i className="topIcon fas fa-globe"/> 
                </a>
                

            </div>
            <div className="topCenter">
                <ul className="topList">
                    <li className="topListItem">
                        <Link className="link" to="/">
                            Home
                        </Link>
                    </li>
                    <li className="topListItem">
                        <Link className="link" to="/about">
                            About
                        </Link>
                    </li>
                    <li className="topListItem">
                        <Link className="link" to="/contact">
                            Contact
                        </Link>
                    </li>
                    <li className="topListItem">
                        <Link className="link" to="/write">
                             Write
                        </Link>
                    </li>
                    <li className="topListItem" onClick={handleLogout}>
                        {user && "Logout"}
                    </li>

                </ul>
            </div>
            <div className="topRight">
            {user ? (
                <Link className="link" to="/settings">
                    <img
                    className="topImg"
                    src={PF + user.profilePic}
                    alt=""
                    />
                </Link>
                ) : (
                <ul className="topList">
                    <li className="topListItem">
                    <Link className="link" to="/login">
                        Login
                    </Link>
                    </li>
                    <li className="topListItem">
                    <Link className="link" to="/register">
                        Register
                    </Link>
                    </li>
                </ul>
                )}
                {/* <i className="topSearchIcon fas fa-search"></i> */}
            </div>
        </div>
    )
}
