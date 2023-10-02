interface LoginProps {
  loginPassword: string;
  setLoginPassword: (loginPassword: string) => void;
}
const Login = (props: LoginProps) => {
  const { loginPassword, setLoginPassword } = props;

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
          onChange={(e) => setLoginPassword(e.target.value)}
          placeholder="Enter your password"
        ></input>
      </div>
    </div>
  );
};
export default Login;
