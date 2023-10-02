import Icon from "./assets/checkmark.png";
import "./assets/tick.css";
const Tick = (props: { isValid: boolean }) => {
  const isValid = props.isValid ? "display" : "";
  return (
    <span className={`correct_field ${isValid}`}>
      <img src={Icon} />
    </span>
  );
};

export default Tick;
