// 미들웨어 함수 만들기
// 미들웨어 함수는 함수를 리턴함!!!!
// 그 함수안에 두개의 파라미터값은 dispatch와, getState

function getProducts(searchQuery) {
    return async(dispatch, getState)=>{
        let url = `http://localhost:5000/products?q=${searchQuery}`;
        let response = await fetch(url);
        let data = await response.json();
        dispatch({type : "GET_PRODUCT_SUCCESS", payload :{data}})
    }
}
//여러개의 함수를 보낼거기 떄문에 객체로 설정
export const productAction= {getProducts}