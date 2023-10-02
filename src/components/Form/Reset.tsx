interface ResetProps {
  setButtonText: (buttonText: string) => void;
}
const Reset = (props: ResetProps) => {
  const { setButtonText } = props;
  return (
    <div className="form_field">
      <p className="reset" onClick={() => setButtonText("Reset")}>
        Reset a password
      </p>
    </div>
  );
};

export default Reset;
