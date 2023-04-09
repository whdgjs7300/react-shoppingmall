// 미들웨어 함수 만들기
// 미들웨어 함수는 함수를 리턴함!!!!
// 그 함수안에 두개의 파라미터값은 dispatch와, getState
import {productActions} from "../reducers/productReducer"

// 리덕스 툴킷 문법
function getProducts(searchQuery) {
    return async(dispatch, getState)=>{
        let url = `http://localhost:5000/products?q=${searchQuery}`;
        let response = await fetch(url);
        let data = await response.json();
        dispatch(productActions.getAllProduct({data}))
    }
}

// 예전 리덕스 문법
function getDetailProducts(id) {
    return async(dispatch, getState)=> {
        let url = `http://localhost:5000/products/${id}`;
        let response = await fetch(url);
        let data = await response.json();
        dispatch({type: "GET_DETAIL_SUCCESS", payload : {data}})
    }
    
        
}

//여러개의 함수를 보낼거기 떄문에 객체로 설정
export const productAction= {getProducts, getDetailProducts}