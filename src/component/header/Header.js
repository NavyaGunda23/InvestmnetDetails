import logo from "../../assest/logo.png"
import Button from "../Button/Button"
import wallet from "../../assest/wallet.svg"
import Avatar from "../../assest/Avatar.png";
import "./Header.css"

const Header = () => {
    return(
        <div className="header-layout">
            <img src={logo} className="header-logo"/>
            <div className="header-profile-wrapper">
            <Button
            buttonicon= {wallet}
            text="Connect Wallet" />
            <img src={Avatar}  className="profile-image"/>
            </div>
            
        </div>
    )
}

export default Header