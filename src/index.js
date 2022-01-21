import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/Root';
import './index.css';
import App from './App';
import storage from './utils/storage';
import { setAuthorizationHeader } from './api/client';
import 'bootstrap/dist/css/bootstrap.css';
import configureStore from './store'



const store = configureStore();


const accessToken = storage.get('auth')
setAuthorizationHeader(accessToken);



ReactDOM.render(
  <React.StrictMode>
    <Root store={store}>
       <App isInitiallyLogged={!!accessToken}/>
    </Root>
  </React.StrictMode>, 
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

