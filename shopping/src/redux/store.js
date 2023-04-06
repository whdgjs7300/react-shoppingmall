import { createStore, applyMiddleware  } from 'redux'
import thunk from 'redux-thunk'
import productReducer from './reducers/productReducer';
// 미들웨어 적용 
let store = createStore(productReducer, applyMiddleware(thunk));

export default store;