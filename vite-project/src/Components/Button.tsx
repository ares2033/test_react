interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  buttonStyle?: "primary" | "secondary" | "light" | "dark";
  onClickButton: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button = ({
  text,
  onClickButton,
  buttonStyle = "primary",
}: ButtonProps) => {
  return (
    <button
      type="button"
      className={`btn btn-${buttonStyle}`}
      onClick={onClickButton}
      data-style={buttonStyle}
    >
      {text}
    </button>
  );
};

export default Button;
