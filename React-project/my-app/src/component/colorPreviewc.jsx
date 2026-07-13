function ColorPreview(props) {
  return (
    <div className="preview-box">
      <div className="color-box" style={{ backgroundColor: props.color }}></div>
      <h4>
        Selected color :{" "}
        <span style={{ color: props.color }}>{props.color}</span>
      </h4>
    </div>
  );
}

export default ColorPreview;
