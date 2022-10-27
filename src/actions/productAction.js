import axios from 'axios';

export const GET_PRODUCT_LIST = "GET_PRODUCT_LIST";

export const getProductList = () => {
    return (dispatch) => {
        axios
        .get("https://60cb2f6921337e0017e440a0.mockapi.io/product")
        .then(function (response) {
                // handle success
                // console.log(response);
            dispatch({
                type: GET_PRODUCT_LIST,
                payload: {
                    data: response.data,
                    errorMessage: false,
                }
            })
            })
        .catch(function (error) {
                // handle error
                console.log(error);
                dispatch({
                    type: GET_PRODUCT_LIST,
                    payload: {
                        data: false,
                        errorMessage: error.message,
                    }
                })
            });
    };
};
