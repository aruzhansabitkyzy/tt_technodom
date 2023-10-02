import Tick from "../Tick/Tick";
import { useState, useEffect } from "react";
import { validName, validPassword, validEmail } from "../../utils/validFields";
import Errors from "../Errors/Errors";
interface RegisterProps {
  buttonBlocked: boolean;
  setButtonBlocked: (buttonBlocked: boolean) => void;
}
const Register = (props: RegisterProps) => {
  const { setButtonBlocked } = props;
  const [fields, setFields] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [isFieldValid, setIsFieldValid] = useState({
    name: false,
    email: false,
    password: false,
  });

  function handleName(e: string, inputType: string) {
    switch (inputType) {
      case "name":
        {
          setFields((prev) => ({ ...prev, name: e }));
          let isNameValid = validName(e);
          if (isNameValid.length > 0) {
            setIsFieldValid((prev) => ({ ...prev, name: false }));
          } else {
            setIsFieldValid((prev) => ({ ...prev, name: true }));
          }
        }
        break;
      case "email":
        {
          setFields((prev) => ({ ...prev, email: e }));
          let isEmailValid = validEmail(e);
          if (isEmailValid.length > 0) {
            setIsFieldValid((prev) => ({ ...prev, email: false }));
          } else {
            setIsFieldValid((prev) => ({ ...prev, email: true }));
          }
        }
        break;
      case "password":
        {
          setFields((prev) => ({ ...prev, password: e }));
          let isPasswordValid = validPassword(e);
          if (isPasswordValid.length > 0) {
            setIsFieldValid((prev) => ({ ...prev, password: false }));
          } else {
            setIsFieldValid((prev) => ({ ...prev, password: true }));
          }
        }
        break;
    }
  }
  useEffect(() => {
    console.log(
      isFieldValid.name + " " + isFieldValid.email + " " + isFieldValid.password
    );
    if (isFieldValid.name && isFieldValid.email && isFieldValid.password) {
      setButtonBlocked(false);
    } else {
      setButtonBlocked(true);
    }
  }, [isFieldValid]);

  return (
    <div className="register">
      <div className="form_field">
        <label id="title" htmlFor="name">
          *Name
        </label>
        <input
          className="field"
          id="name"
          type="text"
          placeholder="Enter your name"
          onChange={(e) => {
            handleName(e.target.value, "name");
          }}
        ></input>
        <Tick isValid={isFieldValid.name} />
      </div>
      {!isFieldValid.name && (
        <Errors error={["Name must contain at least 5 symbols"]} />
      )}
      <div className="form_field">
        <label id="title" htmlFor="email">
          *Email
        </label>
        <input
          className="field"
          id="email"
          type="email"
          placeholder="Enter your email"
          onChange={(e) => {
            handleName(e.target.value, "email");
          }}
        ></input>
        <Tick isValid={isFieldValid.email} />
      </div>
      {!isFieldValid.email && (
        <Errors
          error={[
            "Email must have minimum of 5 length",
            "Email must contain @",
          ]}
        />
      )}
      <div className="form_field">
        <label id="title" htmlFor="password">
          *Password
        </label>
        <input
          className="field"
          id="password"
          type="password"
          placeholder="Enter your password"
          onChange={(e) => {
            handleName(e.target.value, "password");
          }}
        ></input>
        <Tick isValid={isFieldValid.password} />
      </div>
      {!isFieldValid.password && (
        <Errors
          error={[
            "Password must be 8 symbols long",
            "Password must have an uppercase letter",
            "Password must have at least one digit",
          ]}
        />
      )}
      <div className="form_field">
        <input type="checkbox" name="policy" id="policy" required></input>
        <label htmlFor="policy">
          I have read and accept Terms of Service & Privacy Policy
        </label>
      </div>
    </div>
  );
};
export default Register;
