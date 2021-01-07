import { createStore, applyMiddleware } from 'redux';

import { composeWithDevTools } from 'redux-devtools-extension';

import loadData from 'src/middlewares/loadData';
import reducer from './reducer';

const store = createStore(
  reducer,

  composeWithDevTools(
    // setting the middleware for API request
    applyMiddleware(loadData),
  ),
);

export default store;
