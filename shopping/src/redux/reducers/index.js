import { combineReducers } from "redux";
import authenticateReducer from "./authenciateReducer";
import productReducer from "./productReducer";


// 객체로 내보내야함
export default combineReducers({
    auth : authenticateReducer,
    product : productReducer,
});