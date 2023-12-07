import Button from "../Button/Button"
import "./NewLetter.css"
const Newsletters = () => {
    return(
        <div className="newsletter">
        <div className="newsletter-desc">
            <h6>Newsletters</h6>
            <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
            <div className="input-warpper">

            <input type="text" placeholder="Enter your email..."/>
            <Button text="Subscribe"/>
            </div>
        </div>
        <div>
            <img src={require("../../assest/newsletter.png")} />
        </div>
    </div>
    )
}
export default Newsletters