import 'core-js/fn/object/assign';
import React from 'react';
import ReactDOM from 'react-dom';
// import App from './components/Main';
import App from './containers/App'
import { Provider } from 'react-redux'
import { todoStore } from './store/index'

// Render the main component into the dom
ReactDOM.render(  
  <Provider store={todoStore}>
    <App />
  </Provider>,
  document.getElementById('app')
);
