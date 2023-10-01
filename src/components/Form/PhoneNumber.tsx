import { useState, useRef } from "react";
import Tick from "../Tick/Tick";
import { PatternFormat } from "react-number-format";
import "./form.css"
interface PhoneNumberProps {
  phoneRef: React.MutableRefObject<string>,
  isPhoneValid: boolean,
  setIsPhoneValid : (isValid: boolean)=>void
}


const PhoneNumber = (props: PhoneNumberProps) => {
  const {phoneRef, isPhoneValid, setIsPhoneValid} = props;
  function validate() {
    // retrieveing phoneRef value
    let el = phoneRef.current?.['value' as keyof typeof phoneRef.current].toString();
    // clearing out the value from unnecessary dashes , and ()
    let purePhoneNumber = el.replace(/[^0-9\.]+/g, "");
    console.log(el);
    if(purePhoneNumber.length == 11) {
      setIsPhoneValid(true);
    }
    else {
      setIsPhoneValid(false);
    }
  }
  return (
    <div className="form_field">
      <label id="title" htmlFor="phone">
        *Phone Number
      </label>
      <PatternFormat
        onChange={() => validate()}
        getInputRef={(el: string) => (phoneRef.current = el)}
        className="field"
        format="+7 (###) ### ####"
        placeholder="Enter your phone number"
      />
      <Tick isValid={isPhoneValid}/>
    </div>
  );
};
export default PhoneNumber;
