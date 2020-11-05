import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Provider} from 'react-redux'
import {createStore,combineReducers} from 'redux'
import CartReducer from './reducers/CartReducer'
import ItemsReducer from './reducers/ItemsReducer';

const rootReducer = combineReducers({
  cart: CartReducer,
  items: ItemsReducer
})

const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
document.getElementById('root'));