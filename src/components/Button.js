const Button = ({ color, text, onClickProp }) => {
  return (
    <button
      style={{ backgroundColor: color }}
      className="btn"
      onClick={onClickProp}
    >
      {text}
    </button>
  );
};

export default Button;
