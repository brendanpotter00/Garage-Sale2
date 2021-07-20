import "./about.css";
import { Link } from "react-router-dom";
import profile from "./profile.png";

function About() {
    return (
        <div className="about">
            <div className="aboutInfoContainer">
                <span className="aboutInfo">
                    This is a listings website, exclusive to Trinity University students, to post items they wish to sell. Garage Sale serves as the place to post items you wish to sell, rather than posting on various social media sites. 
                </span>
                <br />
                <br />
                <span className="aboutInfo">
                    This website was created by Brendan Potter using a MERN stack (MongoDB, Express, React, Nodejs).
                </span>
                
                <a href="https://www.brendanpotter00.com/">
                    <img className="aboutImg" src={profile} alt="behance" /> 
                </a>
                
            </div>
        </div>
    )
}

export default About
