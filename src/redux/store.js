
import {createStore , combineReducers, applyMiddleware} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { getProductsReducer } from './reducer/productreducer';
import thunk from 'redux-thunk';
const reducer = combineReducers({
  
  getProducts: getProductsReducer

})
const middleware = [thunk];

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(...middleware))
)


export default store;