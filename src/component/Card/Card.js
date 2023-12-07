import "./Card.css"
import Type1 from "../../assest/typ1.png"

const Card = (props) => {
    return(
        <div className={"card-layout" + props.cartStyle}>
            {props.cartStyle == "1" && (
                props.cardData.map(x => (
                    <div className="card-item">
                    <img src={x.image} className="image-263" />
                   {!props.price ? <h6>{x.title}</h6> :
                   <div className="card-text-style2">
                    <h6>{x.title}</h6>
                    <div><img src={Type1} className="feature-logo"/><span className="feature-type-text">{x.feturetype}</span></div>
                    <p className="price-head">Price</p>
                    <span className="price-value">{x.price}</span>
                   </div>
                   } 
                   </div>
                               ))
            )}
            {props.cartStyle == "2" && (
                props.cardData.map(x => (
                    <div className="card-item-style2">
                    <img src={x.image} className="image-82" />
                    <h6>{x.title}</h6>
                    <span>{x.desc}</span>
                   </div>
                               ))
            )}
            {props.cartStyle == "3" && (
                props.cardData.map((x,i) => (
                    <div className="card-item-style3">
                    <span className="number">{i+1}</span>
                    <img src={x.image} className="image-82" />
                    <h6>{x.title}</h6>
                    <p>Total Sales <span>{x.price}</span></p>
                   </div>
                               ))
            )}
            {props.cartStyle == "4" && (
                props.cardData.map((x,i) => (
                    <div className="card-item-style4">
                    <img src={x.image} className="image-82" />
                    <h6>{x.title}</h6>
                    <div className="live-data-container"> 
                        <img src={x.profileImg} />
                        <div className="pl-15"><span>Creator</span>
                    <p>{x.name}</p>
                    </div>
                    <div className="pl-125"><span>Current Bid</span>
                    <p>{x.bidPrice}</p>
                    </div>
                        
                    </div>
                   
                   </div>
                               ))
            )}
        </div>
    )
}
export default Card;