import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
//import reducers
import {
	productListReducer,
	productInfoReducer,
} from './reducers/productReducers';
import { checkoutReducer } from './reducers/checkoutReducers';

// register reducers
const reducer = combineReducers({
	productList: productListReducer,
	productInfo: productInfoReducer,
	checkout: checkoutReducer,
});

// parse local storage back to object
const checkoutItemsFromStorage = localStorage.getItem('checkoutItems')
	? JSON.parse(localStorage.getItem('checkoutItems'))
	: [];

// load local storage as state
const initialState = {
	checkout: { checkoutItems: checkoutItemsFromStorage },
};

const middleware = [thunk];

const store = createStore(
	reducer,
	initialState,
	composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
