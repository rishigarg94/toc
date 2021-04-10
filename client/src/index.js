import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter.js';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css'
import { SpeechProvider } from '@speechly/react-client';

ReactDOM.render(
  <React.StrictMode>
    <SpeechProvider appId="c70cfcc6-1459-4bf0-8ece-803ad99913b2" language="en-US">
      <AppRouter />
    </SpeechProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
