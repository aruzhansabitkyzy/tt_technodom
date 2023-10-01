import { useState, useEffect, useRef } from "react";
import Button from "../Button/Button";
import Register from "./Register";
import PhoneNumber from "./PhoneNumber";
import Login from "./Login";
import { addPerson } from "../../store/features/accountSlice";
import { useAppDispatch, useAppSelector } from "../../store/store";
import "./form.css";

const Form = () => {
  let phoneRef = useRef<string>("");
  const [buttonText, setButtonText] = useState("Login");
  const [buttonBlocked, setButtonBlocked] = useState(true);
  const [isPhoneValid, setIsPhoneValid] = useState(false);
  const dispatch = useAppDispatch();
  const persons = useAppSelector((state) => state.account.persons);

  useEffect(() => {
    if (isPhoneValid) {
      console.log(buttonBlocked)
      let el =
        phoneRef.current?.["value" as keyof typeof phoneRef.current].toString();
      for (let obj of persons) {
        if (obj.phoneNumber == el) {
          setButtonText("Login");
        } else {
          setButtonText("Register");
        }
      }
    }
  }, [isPhoneValid]);

  function onSubmit(e: any) {
    e.preventDefault();
    const object = {
      phoneNumber: e.target[0].value,
      name: e.target[1].value,
      email: e.target[2].value,
      password: e.target[3].value,
    };

    if (buttonText == "Register") {
      dispatch(addPerson(object));
    }
    console.log(persons);
  }
  return (
    <form className="form" onSubmit={onSubmit}>
      <PhoneNumber
        phoneRef={phoneRef}
        isPhoneValid={isPhoneValid}
        setIsPhoneValid={setIsPhoneValid}
      />
      {buttonText == "Login" && <Login />}
      {buttonText == "Register" && <Register buttonBlocked={buttonBlocked} setButtonBlocked={setButtonBlocked}/>}

      <div className="field_error"></div>
      <Button
        buttonBlocked={buttonBlocked}
        text={buttonText}
        active
        onClick={() => {}}
      />
    </form>
  );
};
export default Form;
