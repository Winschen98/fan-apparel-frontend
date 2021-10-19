import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
//import reducers
import {
	productListReducer,
	productInfoReducer,
} from './reducers/productReducers';
import { bagReducer } from './reducers/bagReducers';
import { userLoginReducer, userRegisterReducer, userProfileReducer, userUpdateProfileReducer } from './reducers/userReducer';
import { orderCreateReducer } from './reducers/orderReducers';

// register reducers
const reducer = combineReducers({
	productList: productListReducer,
	productInfo: productInfoReducer,
	bag: bagReducer,
	userRegister: userRegisterReducer,
	userLogin: userLoginReducer,
	userProfile: userProfileReducer,
	userUpdateProfile: userUpdateProfileReducer,
	orderCreate: orderCreateReducer,
});

// parse local storage back to object and load into state
const userCredentialsFromStorage = localStorage.getItem('userCredentials')
	? JSON.parse(localStorage.getItem('userCredentials'))
	: null;

const bagItemsFromStorage = localStorage.getItem('bagItems')
	? JSON.parse(localStorage.getItem('bagItems'))
	: [];

const shippingAddressFromStorage = localStorage.getItem('shippingAddress')
	? JSON.parse(localStorage.getItem('shippingAddress'))
	: {};

// load local storage as state
const initialState = {
	bag: { 
		bagItems: bagItemsFromStorage, 
		shippingAddress: shippingAddressFromStorage,
	},
	userLogin: { userCredentials: userCredentialsFromStorage },
};

const middleware = [thunk];

const store = createStore(
	reducer,
	initialState,
	composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
