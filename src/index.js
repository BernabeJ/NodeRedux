import React from 'react';
import ReactDOM from 'react-dom';
import { createBrowserHistory } from 'history';
import Root from './components/Root';
import './index.css';
import App from './App';
import storage from './utils/storage';
import { setAuthorizationHeader } from './api/client';
import 'bootstrap/dist/css/bootstrap.css';
import configureStore from './store'






const accessToken = storage.get('auth')
setAuthorizationHeader(accessToken);
const history = createBrowserHistory();
const store = configureStore({auth: !!accessToken},{history});



ReactDOM.render(
  <Root store={store} history={history}>
      <React.StrictMode>
       <App />
  </React.StrictMode>
    </Root>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

