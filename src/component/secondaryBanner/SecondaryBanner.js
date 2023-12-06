
import "./SecondaryBanner.css"
import Button from "../Button/Button"
const SecondaryBanner = (props) => {
    return(
        <div className="secondary-banner">
            <h6>{props.headerTitle}</h6>
            <div className="secondary-banner-container">
                <div style={{display:"flex"}}>
                    {props.data.map(x => (
                         <div className="banner-info">
                         {x?.tag == true ? <span className={x.text+" tag"}>{x.text}</span> : 
                         x?.image == true ? <span className="image-text"><img src= {x.imageURL}/><span>{x.text}</span></span> :
                         <p>{x.text}</p>}
                         <h6>{x.title}</h6>
                     </div>
                    ))}
                </div>
                
                {props.buttonRequired && <Button text={props.buttonText} style={{width:"160px"}}/>}
            
            </div>

        </div>
    )
}
export default SecondaryBanner