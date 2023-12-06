import "./Button.css"
const Button = (props) => {
    return(
        <button className="primary-button">
            {props?.buttonicon && <img src={props?.buttonicon}/>} 
            <span>{props.text}</span>
            </button>
    )
}
export default Button;