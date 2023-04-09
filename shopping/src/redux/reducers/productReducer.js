import { createSlice } from '@reduxjs/toolkit'

let initialState = {
    productList : [],
    selectedItem : null,
}
//  예전 리덕스 

// function productReducer(state= initialState, action) {
//    let {type, payload} = action;
//    switch(type) {
//        case "GET_PRODUCT_SUCCESS" :
//            return {...state,
//            productList : payload.data };
//       case "GET_DETAIL_SUCCESS" : 
//                return {...state, selectedItem : payload.data};
//        default : 
//                return {...state};
//    }
//}



// export default productReducer;


// 리덕스 툴킷
const productSlice = createSlice({
    name : 'product',
    initialState,
    reducers: {
        getAllProduct(state, action) {
            state.productList = action.payload.data;
        },
        getSingleProduct(state,action) {
            state.productList = action.payload.data;
        }
    },
})

export const productActions = productSlice.actions
export default productSlice.reducer