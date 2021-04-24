import {
	PRODUCT_LIST_REQUEST,
	PRODUCT_LIST_SUCCESS,
	PRODUCT_LIST_FAIL,
	PRODUCT_INFO_REQUEST,
	PRODUCT_INFO_SUCCESS,
	PRODUCT_INFO_FAIL,
} from '../constants/productConstants';

export const productListReducer = (state = { products: [] }, action) => {
	// depending on action type set the case operation
	switch (action.type) {
		case PRODUCT_LIST_REQUEST:
			return { loading: true, products: [] };

		case PRODUCT_LIST_SUCCESS:
			return { loading: false, products: action.payload };

		case PRODUCT_LIST_FAIL:
			return { loading: false, error: action.payload };

		// if switch case does not match return a default value (initial state):
		default:
			return state;
	}
};



export const productInfoReducer = (state = { product: {} }, action) => {
	// depending on action type set the case operation
	switch (action.type) {
		case PRODUCT_INFO_REQUEST:
			return { loading: true, ...state };

		case PRODUCT_INFO_SUCCESS:
			return { loading: false, product: action.payload };

		case PRODUCT_INFO_FAIL:
			return { loading: false, error: action.payload };

		// if switch case does not match return a default value (initial state):
		default:
			return state;
	}
};
