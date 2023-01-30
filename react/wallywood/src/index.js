import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {ThemeProvider} from 'styled-components'
import { theme } from './components/styled/theme';
import { GlobalStyle } from './components/styled/global.style';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
     <GlobalStyle />
    <App />
    </ThemeProvider>
  </React.StrictMode>
);

