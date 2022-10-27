import { GET_PRODUCT_LIST, GET_PRODUCT_DETAIL } from '../actions/productAction'

let initialState = {
     getProductList: false,
     errorProductList: false,
     getProductDetail: false,
     errorProductDetail: false,
}

const products = (state = initialState, action) => {
     switch (action.type) {
          case GET_PRODUCT_LIST:
               return {
                    ...state,
                    getProductList: action.payload.data,
                    errorProductList: action.payload.errorMessage,
               };
          case GET_PRODUCT_DETAIL:
                return {
                     ...state,
                    getProductDetail: action.payload.data,
                    errorProductDetail: action.payload.errorMessage,
               };

          default:
               return state;
     }
};


export default products;