export const validPassword = (password: string) => {
  const uppercaseRegExp = /(?=.*?[A-Z])/;
  const digitsRegExp = /(?=.*?[0-9])/;
  const minLengthRegExp = /.{8,}/;
  const passwordLength = password.length;
  const uppercasePassword = uppercaseRegExp.test(password);
  const digitsPassword = digitsRegExp.test(password);
  const minLengthPassword = minLengthRegExp.test(password);
  let errMsg = "";
  if (passwordLength === 0) {
    errMsg = "Password is empty";
  } else if (!uppercasePassword) {
    errMsg = "At least one Uppercase";
  } else if (!digitsPassword) {
    errMsg = "At least one digit";
  } else if (!minLengthPassword) {
    errMsg = "At least minumum 8 characters";
  } else {
    errMsg = "";
  }
  return errMsg;
};
export const validName = (name: string) => {
  let errMsg = "";
  if (name.length < 5) {
    errMsg = "Minimum name length must be 5";
  } else {
    errMsg = "";
  }
  return errMsg;
};
export const validEmail = (email: string) => {
  let errMsg = "";
  if (email.length <= 5) {
    errMsg = "Minimum name length must be 5";
  } else if (!email.includes("@")) {
    errMsg = "Email must contain @ symbol";
  } else {
    errMsg = "";
  }
  return errMsg;
};
