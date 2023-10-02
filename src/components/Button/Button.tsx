import "./button.css";
interface ButtonProps {
  buttonBlocked: boolean;
  text: string;
  active: boolean;
  onClick: Function;
}
const Button = (props: ButtonProps) => {
  const { buttonBlocked, text, active, onClick } = props;
  const color = active ? "active" : "";
  return (
    <div className={`button`}>
      <input
        disabled={buttonBlocked}
        type="submit"
        value={text}
        className={`btn ${color}`}
        onClick={() => onClick()}
      ></input>
    </div>
  );
};
export default Button;
