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

export const userLoginReducer = (state = {}, action) => {
	// depending on action type set the case operation
	switch (action.type) {
		case USER_LOGIN_REQUEST:
			return { loading: true };

		case USER_LOGIN_SUCCESS:
			return { loading: false, userCredentials: action.payload };

		case USER_LOGIN_FAIL:
			return { loading: false, error: action.payload };

		// reset state if logged out
		case USER_LOGOUT:
			return {};

		// if switch case does not match return a default value (initial state):
		default:
			return state;
	}
};

export const userRegisterReducer = (state = {}, action) => {
	// depending on action type set the case operation
	switch (action.type) {
		case USER_REGISTER_REQUEST:
			return { loading: true };

		case USER_REGISTER_SUCCESS:
			return { loading: false, userCredentials: action.payload };

		case USER_REGISTER_FAIL:
			return { loading: false, error: action.payload };

		// reset state if logged out
		case USER_LOGOUT:
			return {};

		// if switch case does not match return a default value (initial state):
		default:
			return state;
	}
};

export const userProfileReducer = (state = { user: {} }, action) => {
	switch (action.type) {
		// take initial state using spread operator
		case USER_PROFILE_REQUEST:
			return { ...state, loading: true };

		case USER_PROFILE_SUCCESS:
			return { loading: false, user: action.payload };

		case USER_PROFILE_FAIL:
			return { loading: false, error: action.payload };

		// used to reset the profile when logging out
		case USER_PROFILE_RESET:
			return { user: {} };

		default:
			return state;
	}
};

export const userUpdateProfileReducer = (state = {}, action) => {
	switch (action.type) {
		case USER_UPDATE_PROFILE_REQUEST:
			return { loading: true };

		// add success to output message whenever profile is udpated
		case USER_UPDATE_PROFILE_SUCCESS:
			return { loading: false, success: true, userCredentials: action.payload };

		case USER_UPDATE_PROFILE_FAIL:
			return { loading: false, error: action.payload };

		// reset the past profile part of state after update
		case USER_UPDATE_PROFILE_RESET:
			return {};

		default:
			return state;
	}
};
