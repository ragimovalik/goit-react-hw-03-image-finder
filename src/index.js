import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'modern-normalize';
import { GlobalStyle } from './GlobalStyle';

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);
