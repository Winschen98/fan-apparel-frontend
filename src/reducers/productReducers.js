import { PRODUCT_LIST_REQUEST, PRODUCT_LIST_SUCCESS, PRODUCT_LIST_FAIL } from '../constants/productConstants'


export const productListReducer = (state = {products:[], action}, action) => {
    // depending on action type set the case operation
    switch(action.type){
        case PRODUCT_LIST_REQUEST: 
            return { loading: true, products: [] }

        case PRODUCT_LIST_SUCCESS: 
            return { loading: false, products: action.payload }

        case PRODUCT_LIST_FAIL: 
            return { loading: false, error: action.payload }

        // if switch case does not match return a default value (initial state): 
        default: 
            return state
    }

}