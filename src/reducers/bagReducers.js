import { BAG_ADD_ITEM, BAG_REMOVE_ITEM } from '../constants/bagConstants';

export const bagReducer = (state = { bagItems: [] }, action) => {
	switch (action.type) {
		// put in bag if product in action.payload is in bagItem array
		case BAG_ADD_ITEM:
			const item = action.payload;
			const itemExist = state.bagItems.find(
				(bagItem) => bagItem.product === item.product
			);

			if (itemExist) {
				// if exist, just update state of item
				return {
					...state,
					bagItems: state.bagItems.map((bagItem) =>
						bagItem.product === itemExist.product ? item : bagItem
					),
				};
			} else {
				// add it to state since it doesnt exist
				return {
					...state,
					bagItems: [...state.bagItems, item],
				};
			}

		case BAG_REMOVE_ITEM: 
			return{
				...state, 
				// action.payload is id of product to remove
				bagItems: state.bagItems.filter(bagItem => bagItem.product !== action.payload)
			}

		default:
			return state;
	}
};
