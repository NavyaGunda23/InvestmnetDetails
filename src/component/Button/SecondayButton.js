import "./SecondaryButton.css"
const SecondaryButton = (props) => {
    return(
        <button className="secondary-button">
            {props?.buttonicon && <img src={props?.buttonicon}/>} 
            <span>{props.text}</span>
            </button>
    )
}
export default SecondaryButton;