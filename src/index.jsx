import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import logger from './middleware/logger';
import reducer from './reducer';
// import App from './container';
import {
  CRouter as Router,
} from './components/containers';

const store = createStore(reducer, applyMiddleware(thunk, logger));
const App = (
  <Provider store={store} >
    <Router />
  </Provider>
);
// const App = () => (
//   <div>
//     hello world!
//   </div>
// );

ReactDOM.render(App, document.getElementById('root'));
