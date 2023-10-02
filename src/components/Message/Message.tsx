import './message.css'
enum Messages {
    Login = "You're logged in!",
    Register = "Your account has been created!",
    Reset = "Your password has been reset!",
    LoginError = "Incorrect password"
}
interface MessageProps{
    submitted:string
}

const Message = (props:MessageProps) => {
    return (
        <div className={`message ${props.submitted.length > 0 ? 'show': ''}`}>
           {props.submitted=='Register' && (
            <p>{Messages.Register}</p>
           )}
            {props.submitted=='Login' && (
            <p>{Messages.Login}</p>
           )}
            {props.submitted=='Reset' && (
            <p>{Messages.Reset}</p>
           )}
            {props.submitted=='LoginError' && (
            <p>{Messages.LoginError}</p>
           )}
        </div>
    )
}
export default Message;