import Tick from "../Tick/Tick";
import { PatternFormat } from "react-number-format";
interface PhoneNumberProps {
  accountPhone: string;
  setAccountPhone: (accountPhone: string) => void;
  isPhoneValid: boolean;
  setIsPhoneValid: (isValid: boolean) => void;
}
const PhoneNumber = (props: PhoneNumberProps) => {
  const { accountPhone, setAccountPhone, isPhoneValid, setIsPhoneValid } =
    props;
  function validate(e: string) {
    setAccountPhone(e);
    let purePhoneNumber = accountPhone.replace(/[^0-9\.]+/g, "");
    console.log(purePhoneNumber);
    if (purePhoneNumber.length >= 10) {
      setIsPhoneValid(true);
    } else {
      setIsPhoneValid(false);
    }
  }
  return (
    <div className="form_field">
      <label id="title" htmlFor="phone">
        *Phone Number
      </label>
      <PatternFormat
        onChange={(e) => validate(e.target.value)}
        className="field"
        format="+7 (###) ### ####"
        placeholder="Enter your phone number"
        value={accountPhone}
      />
      <Tick isValid={isPhoneValid} />
    </div>
  );
};
export default PhoneNumber;
