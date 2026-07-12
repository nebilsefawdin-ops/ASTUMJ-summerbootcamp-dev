function ColorButton(props) {
  const color = props.color;
  const isSelected = props.isSelected;
  const onclick = props.onclick;

  return (
    <button
      className={isSelected ? "selected" : ""}
      style={{ backgroundColor: color, color: "white", borderRadius: "5px" }}
      onClick={onclick}
    >
      {color}
    </button>
  );
}
export default ColorButton;
