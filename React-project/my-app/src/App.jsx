import { useState } from "react";
import ColorButton from "./component/colorButton";
import ColorPreview from "./component/colorPreviewc";
import { FaPalette } from "react-icons/fa";
import { VscDebugRestart } from "react-icons/vsc";

function App() {
  const colors = ["Red", "Blue", "Green", "Yellow", "Purple"];
  const [selectedColor, setSelectedColor] = useState("");

  function ColorClickBtn(color) {
    setSelectedColor(color);
  }

  function ResetBtn() {
    setSelectedColor("");
  }

  return (
    <div className="app">
      <h1>🎨Color Palette picker </h1>
      <span>Pick a color to preview it below </span>
      <div className="btn-container">
        {colors.map((color, index) => {
          return (
            <ColorButton
              key={index}
              color={color}
              isSelected={selectedColor === color}
              onclick={() => ColorClickBtn(color)}
            />
          );
        })}
      </div>
      {selectedColor === "" ? (
        <div className="preview-box">
          <FaPalette className="icon-dis" />
          <p>No color selected yet</p>
        </div>
      ) : (
        <ColorPreview color={selectedColor} />
      )}
      <button className="reset-btn" onClick={ResetBtn}>
        <VscDebugRestart />
        Reset
      </button>
    </div>
  );
}

export default App;
