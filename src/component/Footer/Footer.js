
import logo from "../../assest/logo.png"
import "./Footer.css"
import Facebook from "../../assest/facebook.svg"
import Twitter from "../../assest/twitter.svg"
import instagram from "../../assest/instagram.svg"
import Dribble from "../../assest/dribble.svg"
import Behance from "../../assest/behnace.svg"
const Footer = () => {
    const marketplacedata =[{title:"All NFTs"},
    {title:"Art"},
    {title:"Collectibles"},
    {title:"Domain Names"},
    {title:"Music"},
    {title:"Photography"},
    {title:"Sports"},
    {title:"Trading Cards"},
    {title:"Utility"},
    {title:"Virtual Worlds"},
]
const myaccount =[{title:"Profile"},
{title:"Favorites"},
{title:"Watchlist"},
{title:"My Collections"},
{title:"Settings"},
{title:"Stats"},
{title:"Rankings"},
{title:"Activity"}
]
const resource =[{title:"Help Center"},
{title:"Platform Status"},
{title:"Partners"},
{title:"Gas-Free Marketplace"},
{title:"Taxes"},
{title:"Blog"},
{title:"Docs"},
{title:"Newsletter"}
]
const about =[{title:"About"},
{title:"Careers"},
{title:"Partners"},
{title:"Ventures"},
{title:"Grants"}
]
    return(
        <div className="w-100">
       
<div className="footer-container">
    <div className="footer-logo-scrion">
    <img src={logo} />
    <span className="company-desc">The world’s first and largest digital marketplace for crypto collectibles and non-fungible tokens (NFTs). Buy, sell, and discover exclusive digital items.</span>
    </div>
    <div className="footer-list">
        <h6 className="footer-type-name">Marketplace</h6>
        {marketplacedata.map(x => (
            <li>
                {x.title}
            </li>
        ))}
    </div>
    <div className="footer-list">
        <h6 className="footer-type-name">My Account</h6>
        {myaccount.map(x => (
            <li>
                {x.title}
            </li>
        ))}
    </div>
    <div className="footer-list">
        <h6 className="footer-type-name">Resources</h6>
        {resource.map(x => (
            <li>
                {x.title}
            </li>
        ))}
    </div>
    <div className="footer-list">
        <h6 className="footer-type-name">Company</h6>
        {about.map(x => (
            <li>
                {x.title}
            </li>
        ))}
    </div>
    
</div>
<div className="footer1">
<p className="copyright">Voeux Group © 2023. All Rights Reserved</p>
<div className="social-icon-container">
        <img src={Facebook} className="social-icons"/>
        <img src={Twitter} className="social-icons"/>
        <img src={instagram} className="social-icons"/>
        <img src={Dribble} className="social-icons"/>
        <img src={Behance} className="social-icons"/>
</div>
</div>
</div>
    )
}
export default Footer