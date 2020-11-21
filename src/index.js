import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Provider} from 'react-redux'
import {createStore,combineReducers,compose,applyMiddleware} from 'redux'
import CartReducer from './reducers/CartReducer'
import ItemsReducer from './reducers/ItemsReducer';
import thunk from 'redux-thunk'
import UserReducer from './reducers/UserReducer';
import OrdersReducer from './reducers/OrdersReducer';

const rootReducer = combineReducers({
  cart: CartReducer,
  products: ItemsReducer,
  users: UserReducer,
  orders: OrdersReducer
})

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, composeEnhancer(applyMiddleware(thunk)))

ReactDOM.render(
  <Provider store={store}>
      <App />
  </Provider>,
document.getElementById('root'));