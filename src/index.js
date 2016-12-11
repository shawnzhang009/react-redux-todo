import 'core-js/fn/object/assign';
import React from 'react';
import ReactDOM from 'react-dom';
// import App from './components/Main';
import App from './containers/App'

import { createStore } from 'redux'
import { Provider } from 'react-redux'
import todoApp from './reducers'
let store = createStore(todoApp);

// Render the main component into the dom
ReactDOM.render(  
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
);
