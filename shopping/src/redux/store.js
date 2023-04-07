import { createStore, applyMiddleware  } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './reducers/index';

// 미들웨어 적용 
// 첫번째 인자값인 리듀서가 여러개일 경우 합쳐줘야함
let store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;