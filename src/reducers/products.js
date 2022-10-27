import { GET_PRODUCT_LIST } from '../actions/productAction'

let initialState = {
     getProductList: false,
     errorProductList: false,
}

const products = (state = initialState, action) => {
     switch (action.type) {
          case GET_PRODUCT_LIST:
               return {
                    ...state,
                    getProductList: action.payload.data,
                    errorProductList: action.payload.errorMessage,
               };

          default:
               return state;
     }
};


export default products;