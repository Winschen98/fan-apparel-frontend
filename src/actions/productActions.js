import {
	PRODUCT_LIST_REQUEST,
	PRODUCT_LIST_SUCCESS,
	PRODUCT_LIST_FAIL,
} from '../constants/productConstants';
import axios from 'axios';

// action that makes api call for products
// redux-thunk for making async request (function within function)
const listProducts = () => async (dispatch) => {
	try {
		// initiates reducer
		dispatch({ type: PRODUCT_LIST_REQUEST });

		// api call
		const { data } = await axios.get('/products/');

		// successful api call: return data as payload
		dispatch({
			type: PRODUCT_LIST_SUCCESS,
			payload: data,
		});
	} catch (error) {
		// dispatch specific error message if avail., else generic message
		dispatch({
			type: PRODUCT_LIST_FAIL,
			payload:
				error.reponse && error.response.data.message
					? error.response.data.message
					: error.message,
		});
	}
};
