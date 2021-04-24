import { CHECKOUT_ADD_ITEM } from '../constants/checkoutConstants';

export const checkoutReducer = (state = { checkoutItems: [] }, action) => {
	switch (action.type) {
		// checkout if product in action.payload is in checkoutItem array
		case CHECKOUT_ADD_ITEM:
			const item = action.payload;
			const itemExist = state.checkoutItems.find(
				(checkoutItem) => checkoutItem.product === item.product
			);

			if (itemExist) {
				// if exist, just update state of item
				return {
					...state,
					checkoutItems: state.checkoutItems.map((checkoutItem) =>
						checkoutItem.product === itemExist.product ? item : checkoutItem
					),
				};
			} else {
				// add it to state since it doesnt exist
				return {
					...state,
					checkoutItems: [...state.checkoutItems, item],
				};
			}

		default:
			return state;
	}
};
