import React from "react";
import Button from "../Button/Button";
import Register from "./Register";
import PhoneNumber from "./PhoneNumber";
import Login from "./Login";
import { addPerson } from "../../store/features/accountSlice";
import { useAppDispatch, useAppSelector } from "../../store/store";
import "./form.css";

interface FormProps {
  submitted: string;
  setSubmitted: (submitted: string) => void;
}

const Form = (props: FormProps) => {
  let phoneRef = React.useRef<string>("");
  const [loginPassword, setLoginPassword] = React.useState("");
  const [errors, setErrors] = React.useState(null)
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
      let el =
        phoneRef.current?.["value" as keyof typeof phoneRef.current].toString();
      let found = persons.some((person) => person.phoneNumber === el);
      if (found) {
        setButtonText("Login");
        setButtonBlocked(false);
      } else if (found && buttonText == "Reset") {
        setButtonBlocked(false);
      } else if(!found){
        setButtonText("Register");
        setButtonBlocked(true);
      }
    }
  }
  function handleFormSubmission(e:any) {
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
          setButtonText("Login")
        }
        break;
      case "Login":
        {
          let el =
            phoneRef.current?.[
              "value" as keyof typeof phoneRef.current
            ].toString();
          let logged = persons.some(
            (person) =>
              person.phoneNumber === el && person.password == loginPassword
          );
          if (logged) {
            props.setSubmitted("Login");
          }
          else {
            props.setSubmitted("LoginError");
          }
        }
        break;
      case "Reset":
        props.setSubmitted("Reset");
        setButtonText("Login")
        break;
    }
  }
  return (
    <div className="container">
      <div className="formBlock">
        <form className="form" onSubmit={onSubmit}>
          <h3 className='title'>{buttonText}</h3>
          <PhoneNumber
            phoneRef={phoneRef}
            isPhoneValid={isPhoneValid}
            setIsPhoneValid={setIsPhoneValid}
          />
          {buttonText == "Login" && !buttonBlocked && (
            <Login
              setButtonText={setButtonText}
              loginPassword={loginPassword}
              setLoginPassword={setLoginPassword}
            />
          )}
          {buttonText == "Register" &&(
            <Register
              buttonBlocked={buttonBlocked}
              setButtonBlocked={setButtonBlocked}
              // errors={errors}
              // setErrors={setErrors}
            />
          )}
          {/* <div className="field_error">
            {errors.map((error) => (
              <p>{error}</p>
            ))}
          </div> */}
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
