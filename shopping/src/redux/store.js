import { createStore, applyMiddleware  } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './reducers/index';
import { configureStore } from '@reduxjs/toolkit'
import authenticateReducer from './reducers/authenciateReducer';
import productReducer from './reducers/productReducer';

// 미들웨어 적용 
// 첫번째 인자값인 리듀서가 여러개일 경우 합쳐줘야함
// let store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

// 리덕스 툴킷 최신문법(미들웨어, 콤바인리듀서, 데브툴 다 통합해서 한번에 쓸수 있음)

const store = configureStore({
    reducer : {
        auth : authenticateReducer,
        product : productReducer,
    }
})

export default store;
