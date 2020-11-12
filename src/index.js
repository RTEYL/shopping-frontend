import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Provider} from 'react-redux'
import {createStore,combineReducers,compose,applyMiddleware} from 'redux'
import CartReducer from './reducers/CartReducer'
import ItemsReducer from './reducers/ItemsReducer';
import thunk from 'redux-thunk'
import { Auth0Provider } from "@auth0/auth0-react";
import UserReducer from './reducers/UserReducer';

const rootReducer = combineReducers({
  cart: CartReducer,
  products: ItemsReducer,
  user: UserReducer
})

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, composeEnhancer(applyMiddleware(thunk)))

const domain = process.env.REACT_APP_AUTH0_DOMAIN
const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID
ReactDOM.render(
  <Auth0Provider
    domain={domain}
    clientId={clientId}
    redirectUri={window.location.origin}
    >
    <Provider store={store}>
        <App />
    </Provider>
  </Auth0Provider>,
document.getElementById('root'));