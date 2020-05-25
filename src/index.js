import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter,Route, Switch } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import initStore from './redux/store';
import { Provider } from 'react-redux';

//init store 
const store = initStore();
//

ReactDOM.render(<React.StrictMode>
 <Provider store={store}>
    <App />
  </Provider>
  </React.StrictMode>,

  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
