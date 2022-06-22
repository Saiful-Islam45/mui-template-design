import React from 'react';
import './App.css';
import { HomePage } from './components';
import { createTheme, ThemeProvider } from '@mui/material';
import { useState } from 'react';

function App() {
  const [mode, setMode] = useState('light')
  const darkTheme = createTheme({
    palette: {
      mode: mode
    }
  })
  return (
    <ThemeProvider theme={darkTheme}>
      <HomePage/>
    </ThemeProvider>
  );
}

export default App;
