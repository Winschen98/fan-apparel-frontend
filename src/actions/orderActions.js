import axios from 'axios';
import { 
    ORDER_CREATE_REQUEST,
    ORDER_CREATE_SUCCESS,
    ORDER_CREATE_FAIL 
} from '../constants/orderConstants'; 


export const createOrder = (order) => async (dispatch, getState) => {
	try {
		dispatch({
			type: ORDER_CREATE_REQUEST,
		});

		const {
			userLogin: { userCredentials },
		} = getState();

		const config = {
			headers: {
				'Content-type': 'application/json',
				Authorization: `Bearer ${userCredentials.token}`,
			},
		};

		const { data } = await axios.post(`/orders/add/`, order, config);

		dispatch({
			type: ORDER_CREATE_SUCCESS,
			payload: data
		});


	} catch (error) {
		dispatch({
			type: ORDER_CREATE_FAIL,
			payload:
				error.response && error.response.data.detail
					? error.response.data.detail
					: error.message,
		});
	}
};