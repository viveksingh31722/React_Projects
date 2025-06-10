import React from "react";
import useLocalStorage from "./useLocalStorage";
import './theme.css';

export default function LightDarkMode() {  
  // In this we need to create a custom hook to save the value in local storage to keep the theme persist the refresh.

  const [theme, setTheme] = useLocalStorage('theme', "dark");

  function handleToggleTheme(){
    setTheme(theme === 'light' ? 'dark' : 'light');
  }

  console.log(theme);
  

  return (
    <div className="light-dark-mode" data-theme={theme}>
      <div className="container">
        <p>Hello World!</p>
        <button onClick={handleToggleTheme}>Change Theme</button>
      </div>
    </div>
  );
}
 