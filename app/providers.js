// app/providers.js
// providers.js
import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme'; // Verify the correct path to the theme file

export function Providers({ children }) {
  return (
    <ThemeProvider theme={theme}>
      {children}
    </ThemeProvider>
  );
}

