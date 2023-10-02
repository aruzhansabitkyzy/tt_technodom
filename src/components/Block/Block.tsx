import {useState} from "react";
import Form from "../Form/Form";
import Message from "../Message/Message";
const Block = () => {
  const [submitted, setSubmitted] = useState("");
  return (
    <div className="block">
      <Message submitted={submitted} />
      <Form submitted={submitted} setSubmitted={setSubmitted} />
    </div>
  );
};
export default Block;
