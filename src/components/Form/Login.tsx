import Tick from "../Tick/Tick";
const Login = () => {
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
            placeholder="Enter your password"
          ></input>
          <Tick isValid={true}/>
        </div>
        <div className="form_field">
          <p className="reset">Reset a password</p>
        </div>
      </div>
    );
  };
  export default Login;
  