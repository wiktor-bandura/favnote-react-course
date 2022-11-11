import { applyMiddleware, createStore, compose } from 'redux';
import thunk from 'redux-thunk';
import notesApp from '../reducers';

/* eslint-disable no-underscore-dangle */
const store = createStore(
  notesApp,
  /* preloadedState, */
  compose(
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(thunk),
  ),
);
/* eslint-enable */

export default store;
