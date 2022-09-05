import React from "react";
import { useState } from "react";
import DarkTheme from "../DarkTheme";


function loadDarkMode() {
  let value = localStorage.getItem('darkMode');
  if(value){
    return JSON.parse(value);
  } else {
    return false;
  }
}

const ThemeSwitcher = () => {
  const [darkMode, setDarkMode] = useState(()=>{loadDarkMode});
  const colorMode = darkMode ? "Light Mode" : "Dark Mode";

  

  function handleClick() {
    localStorage.setItem('darkMode', JSON.stringify(!darkMode));
    darkMode ? setDarkMode(false) : setDarkMode(true);
  }


  console.log('[ThemeSwitcher]',darkMode);

  return (
    <>
      <button
        onClick={handleClick}
      >
        {colorMode}
      </button>
      <style jsx>{`
        button {
          background-color: #a1719d;
          padding: 10px 25px;
          margin: 0;
          border-radius: 20px;
          height: 40px;
          margin: 10px 25px;
          font-weight: bold;
          border: none;
        }
      `}</style>
      { darkMode && <DarkTheme /> } {/* Styles Must encapsulated jsx in component. Cannot use conditional render directly */}
    </>
  );
};

export default ThemeSwitcher;
