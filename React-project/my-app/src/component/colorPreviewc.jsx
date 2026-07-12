function ColorPreview(props) {
  return (
    <div className="preview-box">
      <div className="color-box" style={{ backgroundColor: props.color }}></div>
      <h4>Selected Color: {props.color}</h4>
    </div>
  );
}

export default ColorPreview;
