import "./NavBar.css"
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom'; 
const NavBar = (props) => {
    return (
        <div className="navbar-container">
            <ul>
            {props.navData?.map(x => (
                <Link to={x.path}><li><a>{x.title}</a></li></Link>
            ))} 
            </ul>
        </div>
    )
}

export default NavBar;