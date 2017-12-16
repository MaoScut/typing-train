import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducer';
// import App from './container';
import { CSetting as Setting } from './components/containers';

const store = createStore(reducer);
const App = (
  <Provider store={store} >
    <Setting />
  </Provider>
);
// const App = () => (
//   <div>
//     hello world!
//   </div>
// );

ReactDOM.render(App, document.getElementById('root'));
