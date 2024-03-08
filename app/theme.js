"use client"
// theme.js
import { createTheme } from '@mui/material/styles';
import { red, blue } from '@mui/material/colors';

const theme = createTheme({
  palette: {
    primary: {
      main: blue[500],
    },
    secondary: {
      main: red[500],
    },
  },
  typography: {
    fontFamily: 'Roboto, sans-serif',
  },
  // Other theme options
});

export default theme;
    