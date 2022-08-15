import Button from "./Button.js";

const Header = ({ title, onAdd, showAdd }) => {
  return (
    <header className="header">
      <h1> {title} </h1>
      <Button
        color={showAdd === true ? "red" : "green"}
        text={showAdd === true ? "Close" : "Add"}
        onClickProp={onAdd}
      />
    </header>
  );
};

Header.defaultProps = { title: "Hi" };

// CSS in JSX :
// const style = {
//     color: "green",
//     backgroundColor: "darkblue",
//   };

export default Header;
