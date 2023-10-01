interface LoginProps {
  loginPassword: string,
  setLoginPassword: (loginPassword:string) => void,
  setButtonText: (buttonText:string) => void,
}
const Login = (props:LoginProps) => {

  const {loginPassword, setLoginPassword, setButtonText} = props;

    return (
      <div className="login">
        <div className="form_field">
          <label id="title" htmlFor="password">
            *Password
          </label>
          <input
            className="field"
            id="password"
            type="password"
            value={loginPassword}
            onChange={(e) =>setLoginPassword(e.target.value)}
            placeholder="Enter your password"
          ></input>
        </div>
        <div className="form_field">
          <p className="reset" onClick={()=>setButtonText("Reset")}>Reset a password</p>
        </div>
      </div>
    );
  };
  export default Login;
  