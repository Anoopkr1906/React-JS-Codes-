import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

import './App.css'
import { ThemeProvider } from './contexts/theme'
import ThemeBtn from './components/ThemeBtn';
import Card from './components/Card';

function App() {

  const [themeMode , setThemeMode] = useState('light');

  const toDarkTheme = () => {
    setThemeMode("dark");
  }

  const toLightTheme = () => {
    setThemeMode("light");
  }

  // actual change in the theme

  useEffect(() => {
    document.querySelector('html').classList.remove("dark" , "light");
    document.querySelector('html').classList.add(themeMode);
  }, [themeMode]);
  

  return (
        <ThemeProvider value={{themeMode , toDarkTheme , toLightTheme}}>
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
