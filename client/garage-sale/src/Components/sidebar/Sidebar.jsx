import "./sidebar.css";
import logo from "../../imgs/logo.png";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Sidebar() {
    const [cats, setCats] = useState([]);

    useEffect(() => {
        const getCats = async () => {
        const res = await axios.get("/categories");
        setCats(res.data);
        };
        getCats();
    }, []);

    return (
        <div className="sidebar">
            
            <div className="sidebarItem">
                <div className="sidebarCard">
                <span className="sidebarTitle">About</span>
                </div>
                <img className="sidebarImg" src={logo} alt="" />
                <p> Fraternity At Trinity University</p>
            </div>
            
            {/* 
            <div className="sidebarItem">
                <div className="sidebarCard">
                <span className="sidebarTitle">Categories</span>
                </div>
                <ul className="sidebarList"> 

                    {cats.map((c) => (
                    <Link to={`/?cat=${c.name}`} className="link">
                        <li className="sidebarListItem">{c.name}</li>
                    </Link>
                    ))}
                    
                </ul>
            
            </div> */}
            
            <div className="sidebarItem">
                <div className="sidebarCard">
                <span className="sidebarTitle">Follow Us</span>
                </div>
                <div className="sidebarSocial">
                    <i className="sidebarIcon fab fa-facebook-square"></i>
                    <i className="sidebarIcon fab fa-instagram"></i>
                    <i className="sidebarIcon fas fa-globe"></i>
                </div>
           
            </div>
        </div>
    )
}
