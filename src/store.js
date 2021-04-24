import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
//import reducers
import {
	productListReducer,
	productInfoReducer,
} from './reducers/productReducers';
import { bagReducer } from './reducers/bagReducers';

// register reducers
const reducer = combineReducers({
	productList: productListReducer,
	productInfo: productInfoReducer,
	bag: bagReducer,
});

// parse local storage back to object
const bagItemsFromStorage = localStorage.getItem('bagItems')
	? JSON.parse(localStorage.getItem('bagItems'))
	: [];

// load local storage as state
const initialState = {
	bag: { bagItems: bagItemsFromStorage },
};

const middleware = [thunk];

const store = createStore(
	reducer,
	initialState,
	composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
