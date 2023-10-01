import './error.css'
interface ErrorProps{
    error: string[]
}
const Errors = (props:ErrorProps) => {
    return(
        <div className="errors">
           {props.error.map((er) => (
            <p>{er}</p>
           ))}
        </div>
    )
}
export default Errors;