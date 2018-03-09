import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from "react-redux";
import reducer from './reducers/index';
import thunk from 'redux-thunk';
import { setCurrentUser, setAuthorizationToken } from './actions/userActions';
// import jwtDecode from 'jwt-decode';

const store = createStore(
  reducer,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
)

// if (localStorage.jwtToken) {
//   setAuthorizationToken(localStorage.jwtToken)
//   try {
//     store.dispatch(setCurrentUser(jwtDecode(jwtToken)));
//   } catch(e) {
//     store.dispatch(setCurrentUser({}))
//   }
// }

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'));
registerServiceWorker();
