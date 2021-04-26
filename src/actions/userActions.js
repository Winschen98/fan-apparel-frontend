import {
	USER_LOGIN_REQUEST,
	USER_LOGIN_SUCCESS,
	USER_LOGIN_FAIL,
	USER_LOGOUT,
} from '../constants/userConstants';
import axios from 'axios';

// take email and pw, make the api call, and then register the user
export const login = (email, password) => async (dispatch) => {
	try {
		dispatch({
			type: USER_LOGIN_REQUEST
		});

		// send additional data about content-type
		const config = {
			headers: {
				'Content-type': 'application/json',
			},
		};

		// Send user and pw to get back a token
		const { data } = await axios.post(
			'/users/login',
			{ username: email, password: password },
			config
		);

		dispatch({
			type: USER_LOGIN_SUCCESS,
			payload: data,
		});

		// store user auth/token in local storage
		localStorage.setItem('userCredentials', JSON.stringify(data));
	} catch (error) {
        dispatch({
            type: USER_LOGIN_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
};
