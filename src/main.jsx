import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import './index.css'
import App from './App.jsx'
import { store } from './redux/store';

const theme = createTheme({
  palette: {
    primary: {
      main: '#E44848',
      //light: 'DADDE1',
      dark: '#D84343',
      contrastText: '#FFFFFF',
    },
    secondary: {
      main: '#DADDE1',
      // light: '#F5EBFF',
      dark: '#D84343',
      contrastText: '#101828',
    },
  },
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
