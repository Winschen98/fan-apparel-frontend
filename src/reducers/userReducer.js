import {
	USER_LOGIN_REQUEST,
	USER_LOGIN_SUCCESS,
	USER_LOGIN_FAIL,
	USER_LOGOUT,
	USER_REGISTER_REQUEST,
	USER_REGISTER_SUCCESS,
	USER_REGISTER_FAIL,
} from '../constants/userConstants';


export const userLoginReducer = (state = {  }, action) => {
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
            return {}

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
