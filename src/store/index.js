import { applyMiddleware, createStore, compose } from 'redux';
import thunk from 'redux-thunk';
import notesApp from '../reducers';

/* eslint-disable no-underscore-dangle */
const store = createStore(
  notesApp,
  /* preloadedState, */
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  ),
);
/* eslint-enable */

export default store;
