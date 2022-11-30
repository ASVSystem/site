import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    primary: {
      light: '#757ce8',
      main: '#007090',
      dark: '#002884',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ff7961',
      main: '#f44336',
      dark: '#ba000d',
      contrastText: '#000',
    },
  },
  typography: {
    h1: {
      fontSize: "6rem",
    },
    h2: {
      fontSize: "3.75rem",
    },
    h3: {
      fontSize: "3rem",
    },
    h4: {
      fontSize: "1.75rem",
    },
    h5: {
      fontSize: "1.25rem",
    },
    subtitle1: {
      fontFamily: "Roboto , sans-serif",
      fontSize: "1rem",
      lineHeight: 1.75,
      letterSpacing: "0.01938em"
    },
    subtitle2: {
      fontFamily: "Roboto , sans-serif",
      fontSize: "0.875rem",
      lineHeight: 1.57,
      letterSpacing: "0.01738em"
    },
    body1: {
      fontSize: "1rem",
      fontFamily: "Roboto"
    }
  },
});