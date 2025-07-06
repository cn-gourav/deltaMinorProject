import React, { useEffect, useState } from 'react'
import './App.css';
import { ThemeProvider } from './components/theme';
import ThemeBtn from './template/ThemeBtn';
import Card from './template/Card';

const App = () => {
  const [themeMode, setThemeMode] = useState("light");
  const lightTheme = () => {
    setThemeMode("light");
  };
  const darhTheme = () => {
    setThemeMode("dark");
  };

  //actual change in theme
  useEffect(() => {
    document.querySelector("html").classList.remove("light", "dark");
    document.querySelector("html").classList.add(themeMode);
  }, [themeMode]);


  return (
    <ThemeProvider value={{ themeMode, lightTheme, darhTheme }}>
      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            <ThemeBtn />
          </div>

          <div className="w-full max-w-sm mx-auto">
            <Card />
          </div>
        </div>
      </div>
    </ThemeProvider>
  )
}

export default App