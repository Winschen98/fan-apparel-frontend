import {
	USER_LOGIN_REQUEST,
	USER_LOGIN_SUCCESS,
	USER_LOGIN_FAIL,
	USER_LOGOUT,
	USER_REGISTER_REQUEST,
	USER_REGISTER_SUCCESS,
	USER_REGISTER_FAIL,
	USER_PROFILE_REQUEST,
	USER_PROFILE_SUCCESS,
	USER_PROFILE_FAIL,
	USER_PROFILE_RESET,
	USER_UPDATE_PROFILE_REQUEST,
	USER_UPDATE_PROFILE_SUCCESS,
	USER_UPDATE_PROFILE_FAIL,
	USER_UPDATE_PROFILE_RESET,
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

export const logout = () => (dispatch) => {
	localStorage.removeItem('userCredentials')
	dispatch({ type: USER_LOGOUT });
	dispatch({ type: USER_PROFILE_RESET });
}

export const register = (name, email, password) => async (dispatch) => {
	try {
		dispatch({
			type: USER_REGISTER_REQUEST,
		});

		const config = {
			headers: {
				'Content-type': 'application/json',
			},
		};

		const { data } = await axios.post(
			'/users/register/',
			{ name: name, email: email, password: password },
			config
		);

		dispatch({
			type: USER_REGISTER_SUCCESS,
			payload: data,
		});

		// once a user registers they dispatch so they are logged in immediately
		dispatch({
			type: USER_LOGIN_SUCCESS,
			payload: data,
		});

		localStorage.setItem('userCredentials', JSON.stringify(data));
	} catch (error) {
		dispatch({
			type: USER_REGISTER_FAIL,
			payload:
				error.response && error.response.data.detail
					? error.response.data.detail
					: error.message,
		});
	}
};


export const getUserProfile = (id) => async (dispatch, getState) => {
	try {
		dispatch({
			type: USER_PROFILE_REQUEST,
		});

		const { userLogin: {userCredentials},} = getState()

		const config = {
			headers: {
				'Content-type': 'application/json',
				Authorization: `Bearer ${userCredentials.token}`
			},
		};

		const { data } = await axios.get(
			`/users/${id}/`,
			config
		);

		dispatch({
			type: USER_PROFILE_SUCCESS,
			payload: data,
		});

	} catch (error) {
		dispatch({
			type: USER_PROFILE_FAIL,
			payload:
				error.response && error.response.data.detail
					? error.response.data.detail
					: error.message,
		});
	}
};


export const updateUserProfile = (user) => async (dispatch, getState) => {
	try {
		dispatch({
			type: USER_UPDATE_PROFILE_REQUEST,
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

		const { data } = await axios.put(`/users/profile/update/`, user, config);

		dispatch({
			type: USER_UPDATE_PROFILE_SUCCESS,
			payload: data
		});

		// log in with new credentials after update
		dispatch({
			type: USER_LOGIN_SUCCESS,
			payload: data,
		});

		localStorage.setItem('userCredentials', JSON.stringify(data));

	} catch (error) {
		dispatch({
			type: USER_UPDATE_PROFILE_FAIL,
			payload:
				error.response && error.response.data.detail
					? error.response.data.detail
					: error.message,
		});
	}
};