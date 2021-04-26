import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
//import reducers
import {
	productListReducer,
	productInfoReducer,
} from './reducers/productReducers';
import { bagReducer } from './reducers/bagReducers';
import { userLoginReducer } from './reducers/userReducer';

// register reducers
const reducer = combineReducers({
	productList: productListReducer,
	productInfo: productInfoReducer,
	bag: bagReducer,
	userLogin: userLoginReducer,
});

// parse local storage back to object and load into state
const userCredentialsFromStorage = localStorage.getItem('bagItems')
	? JSON.parse(localStorage.getItem('bagItems'))
	: [];


const bagItemsFromStorage = localStorage.getItem('userCredentials')
	? JSON.parse(localStorage.getItem('userCredentials'))
	: [];

// load local storage as state
const initialState = {
	bag: { bagItems: bagItemsFromStorage },
	userLogin: {userCredentials: userCredentialsFromStorage}
};

const middleware = [thunk];

const store = createStore(
	reducer,
	initialState,
	composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
