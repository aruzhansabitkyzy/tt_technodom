import React from "react";
import Form from "../Form/Form";
import Message from "../Message/Message";
const Block = () => {
  const [submitted, setSubmitted] = React.useState("");
  return (
    <div className="block">
      <Message submitted={submitted} />
      <Form submitted={submitted} setSubmitted={setSubmitted} />
    </div>
  );
};
export default Block;
