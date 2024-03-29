import React from "react";

function Toggle({ light, lightDark }) {
  return (
    <label
      className="toggle-contain"
      aria-label={`Toggle for light or dark mode`}
      tabIndex="0"
      htmlFor="toggle-mode"
      onKeyDown={(e) => (e.key === "Enter" ? lightDark() : null)}
    >
      <input
        className="toggle-checkbox"
        type="checkbox"
        onChange={lightDark}
        checked={light}
        aria-hidden={true}
        tabIndex="-1"
        id="toggle-mode"
      ></input>
      <div className="toggle-slot">
        <div className="sun-icon-wrapper">
          <div
            className="iconify sun-icon"
            data-icon="feather-sun"
            data-inline="false"
          ></div>
        </div>
        <div className="toggle-button"></div>
        <div className="moon-icon-wrapper">
          <div
            className="iconify moon-icon"
            data-icon="feather-moon"
            data-inline="false"
          ></div>
        </div>
      </div>
    </label>
  );
}

export default Toggle;
