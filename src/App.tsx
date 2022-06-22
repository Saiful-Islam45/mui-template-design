import React from 'react';
import './App.css';
import { HomePage } from './components';
import { createTheme, ThemeProvider } from '@mui/material';
import { useState } from 'react';
export type PaletteMode = 'light' | 'dark';
function App() {
  const [mode, setMode] = useState<PaletteMode>('dark')
  const darkTheme = createTheme({
    palette: {
      mode: mode
    }
  })
  return (
    <ThemeProvider theme={darkTheme}>
      <HomePage mode={mode} setMode={setMode}/>
    </ThemeProvider>
  );
}

export default App;
