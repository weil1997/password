import React, { useState } from "react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";

function App() {
  const [passwordLength, setPasswordLength] = useState(8);
  const [checkboxes, setCheckboxes] = useState({
    checkbox1: false,
    checkbox2: false,
    checkbox3: false,
    checkbox4: false,
  });

  const handleSliderChange = (value) => {
    setPasswordLength(value);
  };

  const handleCheckboxChange = (event) => {
    const checkboxName = event.target.name;
    const isChecked = event.target.checked;

    setCheckboxes((prevCheckboxes) => ({
      ...prevCheckboxes,
      [checkboxName]: isChecked,
    }));
  };

  return (
    <div className="container">
      <h1 className="password">password generator</h1>

      <p className="random-password">uvt1k5v3b28o87a</p>

      <div className="card-container">
        <p> Character length: {passwordLength}</p>
        <Slider
          value={passwordLength}
          onChange={handleSliderChange}
          min={6}
          max={15}
        />

        <div className="checkboxes">
          <label>
            <input
              type="checkbox"
              name="checkbox1"
              checked={checkboxes.checkbox1}
              onChange={handleCheckboxChange}
            />
            Include Uppercase Letters
          </label>
          <label>
            <input
              type="checkbox"
              name="checkbox2"
              checked={checkboxes.checkbox2}
              onChange={handleCheckboxChange}
            />{" "}
            Include lowercase Letters
          </label>
          <label>
            <input
              type="checkbox"
              name="checkbox2"
              checked={checkboxes.checkbox2}
              onChange={handleCheckboxChange}
            />{" "}
            Include Numbers
          </label>
          <label>
            <input
              type="checkbox"
              name="checkbox2"
              checked={checkboxes.checkbox2}
              onChange={handleCheckboxChange}
            />{" "}
            Include symnbols
          </label>
        </div>
      </div>
    </div>
  );
}

export default App;
