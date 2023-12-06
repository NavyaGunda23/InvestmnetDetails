import "./Banner.css"
import Arrow from "../../assest/arrow.svg"
import SecondaryButton from "../Button/SecondayButton"
const Banner = () => {
    return (
        <div>
        <a >  <img src={Arrow} /><span className="link-text">Back</span></a>
        <div className="banner-container mt-10">
            <p className="banner-title">Earn While You Hold Explore Our Crypto Staking Farm</p>
            <p className="banner-description">Welcome to our Crypto Staking Farm, where you can earn rewards just by holding onto your cryptocurrencies! It's like planting seeds and watching your rewards grow.</p>

        <div className="button-container">
        <SecondaryButton text="withdraw"/>
        <SecondaryButton text="update Form"/>
        </div>
        </div>
        </div>
    )
}

export default Banner