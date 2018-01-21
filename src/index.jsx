import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import reducer from './reducer';
// import App from './container';
import {
  // CSetting as Setting,
  // // CLife as Life,
  // CContainer as Container,
  // CPop as Pop,
  // CStatics as Statics,
  CRouter as Router,
} from './components/containers';

const store = createStore(reducer, applyMiddleware(thunk));
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
