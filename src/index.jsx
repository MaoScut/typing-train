import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducer';
// import App from './container';
import { CSetting as Setting, CFallingObjs as FallingObjs } from './components/containers';

const store = createStore(reducer);
const App = (
  <Provider store={store} >
    <div>
      <Setting />
      <FallingObjs />
    </div>
  </Provider>
);
// const App = () => (
//   <div>
//     hello world!
//   </div>
// );

ReactDOM.render(App, document.getElementById('root'));
