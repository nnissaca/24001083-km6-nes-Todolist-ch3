import React, { useState } from "react";

function ColorPickerApp() {
  const [red, setRed] = useState("0");
  const [green, setGreen] = useState("0");
  const [blue, setBlue] = useState("0");

  const resetColorPicker = () => {
    setRed(0);
    setGreen(0);
    setBlue(0);
    alert("Isi lagi yaw");
  };

  return (
    <div>
      <div
        style={{
          backgroundColor: `rgb(${red}, ${green}, ${blue})`,
          width: 200,
          height: 200,
        }}
      ></div>
      <div>
        <label>Red:</label>
        <input
          value={red}
          onChange={(r) => setRed(r.target.value)}
          onBlur={(r) => {
            if (red >= 0 && red < 255) {
              setRed(r.target.value);
            } else {
              alert("Gabole minus dan lebih dari 255 yaa guys! 😔");
              setRed("0");
            }
          }}
        />
      </div>
      <div>
        <label>Green:</label>
        <input
          value={green}
          onChange={(g) => setGreen(g.target.value)}
          onBlur={(g) => {
            if (green >= 0 && green < 255) {
              setGreen(g.target.value);
            } else {
              alert("Sama yaa gabole minus dan lebih dari 255 juga guys!!! 😭");
              setGreen("0");
            }
          }}
        />
      </div>
      <div>
        <label>Blue:</label>
        <input
          value={blue}
          onChange={(b) => setBlue(b.target.value)}
          onBlur={(b) => {
            if (blue >= 0 && blue < 255) {
              setBlue(b.target.value);
            } else {
              alert("Subhanallah, gabole minus dan lebih dari 255 guysss 😡");
              setBlue("0");
            }
          }}
        />
      </div>
      <p>
        RGB: {red}, {green}, {blue}
      </p>
      <button onClick={resetColorPicker}>Reset</button>
    </div>
  );
}

export default ColorPickerApp;
