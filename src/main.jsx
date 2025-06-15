import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import './index.css'
import App from './App.jsx'
import { store } from './redux/store';

const theme = createTheme({
  typography: {
    fontFamily: 'Inter, sans-serif',
    h1: {
      fontSize: '48px',
      lineHeight: '32px',
      fontWeight: 600,
      letterSpacing: '0%',
    },
    h2: {
      fontSize: '24px',
      lineHeight: '32px',
      fontWeight: 600,
      letterSpacing: '0%',
    },
    h3: {
      fontSize: '20px',
      lineHeight: '24px',
      fontWeight: 600,
      letterSpacing: '0%',
    },
    body1: {
      fontSize: '16px',
      lineHeight: '24px',
      fontWeight: 400,
      letterSpacing: '0%',
    },
    body2: {
      fontSize: '16px',
      lineHeight: '24px',
      fontWeight: 500,
      letterSpacing: '0%',
    },
    button: {
      fontSize: '16px',
      lineHeight: '24px',
      fontWeight: 500,
      letterSpacing: '-0.5px',
      textTransform: 'none',
    },
    subtitle1: {
      fontSize: '16px',
      lineHeight: '24px',
      fontWeight: 400,
      letterSpacing: '0%',
      textDecoration: 'underline',
    },
  },
  palette: {
    primary: {
      main: '#E44848',
      light: '#F7F7F7',
      dark: '#D84343',
      contrastText: '#FFFFFF',
    },
    secondary: {
      main: '#DADDE1',
      light: '#F2F4F7',
      dark: '#D84343',
      contrastText: '#101828',
    },
    text: {
      primary: '#101828',
      secondary: '#475467',
      tertiary: '#6C717B',
    }
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          textTransform: 'none',
          
        },
      },
    },
    MuiTab: {
      styleOverrides: {
        root: {
          textTransform: 'none',
        }
      }
    },
    MuiTabs: {
      defaultProps: {
        textColor: 'text.primary',
        indicatorColor: 'primary',
      },
      styleOverrides: {
        indicator: {
          height: 5,
        },
      },
    },
    MuiDivider: {
      styleOverrides: {
        backgroundColor: 'secondary.mail'
      }
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          color: 'theme.palette.text.tertiary',
          fontSize: '16px',
          lineHeight: '24px',
          fontWeight: 400,
          fontFamily: 'Inter, sans-serif',
          backgroundColor: 'theme.palette.primary.light'
        },
      },
    },
  }
});

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  </StrictMode>,
)
