import logo from "../../assest/logo.png"
import Button from "../Button/Button"
import wallet from "../../assest/wallet.svg"
import Avatar from "../../assest/Avatar.png";
import "./Header.css"
import NavBar from "../Navbar/NavBar";
import Search from "../../assest/Search.svg";
import profile from "../../assest/profile.svg";
import Cart from "../../assest/Cart.svg";
const Header = (props) => {
    const navdata = [{title:"DetailPage",path:"/"},{title:"NFT Page",path:"/nft"}]
    return(
        <div className="header-layout">
            <img src={logo} className="header-logo"/>
            <NavBar navData={navdata}/>
            {props.headerType== "Details" ?  <div className="header-profile-wrapper">
            <Button
            buttonicon= {wallet}
            text="Connect Wallet" />
            <img src={Avatar}  className="profile-image"/>
            </div>:<div className="header-profile-wrapper">
            <img src={Search}  className="image-34"/>
            <Button
            buttonicon= {wallet}
            text="Connect Wallet" />
            <i className=" circled-icon"><img src={Cart}  className="image-20"/></i>
            <i className=" circled-icon"><img src={profile}  className="image-20"/></i>
            </div> }
           
            
            
        </div>
    )
}

export default Header