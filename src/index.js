import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from 'redux'
import { Provider } from 'react-redux';
import App from './App';
import './index.css';
import reducer from './reducer';
import thunk from 'redux-thunk';


const store = createStore(reducer, applyMiddleware(thunk))

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
     <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);
