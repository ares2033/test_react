interface ButtonProps {
  text: string;
  style: "primary" | "secondary" | "light" | "dark";
  onClickButton: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button = ({ text, onClickButton, style }: ButtonProps) => {
  return (
    <button
      type="button"
      className={`btn btn-${style}`}
      onClick={onClickButton}
      data-style={style}
    >
      {text}
    </button>
  );
};

export default Button;
