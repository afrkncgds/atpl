import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter} from 'react-router-dom';
import { Provider} from 'react-redux'
import App from './App';
import { createStore,applyMiddleware} from 'redux'
import {thunk} from 'redux-thunk'
import { createLogger } from 'redux-logger'


const middleware = [thunk];
const logger = createLogger({
  // ...options
});
const root = ReactDOM.createRoot(document.getElementById('root'));
middleware.push(createLogger());
const store = createStore(
  applyMiddleware(logger)
);


root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
