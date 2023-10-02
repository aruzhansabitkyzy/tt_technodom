import React from "react";
import Button from "../Button/Button";
import Register from "./Register";
import PhoneNumber from "./PhoneNumber";
import Login from "./Login";
import { addPerson } from "../../store/features/accountSlice";
import { useAppDispatch, useAppSelector } from "../../store/store";
import "./form.css";
import Reset from "./Reset";

interface FormProps {
  submitted: string;
  setSubmitted: (submitted: string) => void;
}

const Form = (props: FormProps) => {
  const [accountPhone, setAccountPhone] = React.useState("");
  const [accountPassword, setAccountPassword] = React.useState("");
  const [buttonText, setButtonText] = React.useState("Login");
  const [buttonBlocked, setButtonBlocked] = React.useState(true);
  const [isPhoneValid, setIsPhoneValid] = React.useState(false);
  const dispatch = useAppDispatch();
  const persons = useAppSelector((state) => state.account.persons);

  React.useEffect(() => {
    handlePhoneValidation();
  }, [isPhoneValid]);

  function onSubmit(e: any) {
    e.preventDefault();
    handleFormSubmission(e);
  }

  function handlePhoneValidation() {
    if (isPhoneValid) {
      console.log(buttonBlocked);
      let found = persons.some((person) => person.phoneNumber === accountPhone);
      if (found && buttonText == "Login") {
        setButtonText("Login");
        setButtonBlocked(false);
      } else if (found && buttonText == "Reset") {
        setButtonBlocked(false);
      } else if (!found) {
        setButtonText("Register");
        setButtonBlocked(true);
      }
    }
  }
  function handleFormSubmission(e: any) {
    switch (buttonText) {
      case "Register":
        {
          const object = {
            phoneNumber: e.currentTarget[0].value,
            name: e.target[1].value,
            email: e.target[2].value,
            password: e.target[3].value,
          };
          dispatch(addPerson(object));
          props.setSubmitted("Register");
          setAccountPhone("");
          setIsPhoneValid(false);
          setButtonText("Login");
        }
        break;
      case "Login":
        {
          let logged = persons.some(
            (person) =>
              person.phoneNumber === accountPhone &&
              person.password == accountPassword
          );
          if (logged) {
            props.setSubmitted("Login");
            setAccountPhone("");
            setAccountPassword("");
            setIsPhoneValid(false);
          } else {
            props.setSubmitted("LoginError");
          }
        }
        break;
      case "Reset":
        props.setSubmitted("Reset");
        setAccountPhone("");
        setIsPhoneValid(false);
        setButtonText("Login");
        break;
    }
  }
  return (
    <div className="container">
      <div className="formBlock">
        <form className="form" onSubmit={onSubmit}>
          <h3 className="title">{buttonText}</h3>
          <PhoneNumber
            accountPhone={accountPhone}
            setAccountPhone={setAccountPhone}
            isPhoneValid={isPhoneValid}
            setIsPhoneValid={setIsPhoneValid}
          />
          {buttonText == "Login" && !buttonBlocked && (
            <Login
              loginPassword={accountPassword}
              setLoginPassword={setAccountPassword}
            />
          )}
          {buttonText == "Login" && <Reset setButtonText={setButtonText} />}

          {buttonText == "Register" && (
            <Register
              buttonBlocked={buttonBlocked}
              setButtonBlocked={setButtonBlocked}
            />
          )}
          <Button
            buttonBlocked={buttonBlocked}
            text={buttonText}
            active
            onClick={() => {}}
          />
        </form>
      </div>
    </div>
  );
};
export default Form;
