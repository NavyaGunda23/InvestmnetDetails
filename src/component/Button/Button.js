import "./Button.css"
const Button = (props) => {
    return(
        <button className="primary-button" style={props?.style}>
            {props?.buttonicon && <img src={props?.buttonicon}/>} 
            <span>{props.text}</span>
            </button>
    )
}
export default Button;