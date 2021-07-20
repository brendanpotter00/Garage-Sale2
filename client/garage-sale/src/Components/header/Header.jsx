import "./header.css";
import headerImg1 from "../../imgs/wolfSil.png";
import headerImg2 from "../../imgs/wolfBlack.png";
import headerTest from "../../imgs/profile.png";

export default function Header() {
    return (
        <div className="header">
            <div className="headerTitles">
                <span className="headerTitleSm">Phi Sigma Chi</span>
                <span className="headerTitleLg">Garage Sale</span>
            </div>
            
           

            <img className="headerImg" src='https://images.pexels.com/photos/2972038/pexels-photo-2972038.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940' alt="" />
            
            
        </div>
    )
}
