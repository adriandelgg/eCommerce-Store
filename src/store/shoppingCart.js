import { createSlice } from '@reduxjs/toolkit';
import { createSelector } from 'reselect';

const slice = createSlice({
	name: 'cart',
	initialState: [],
	reducers: {
		itemAdded: (items, action) => {
			let newItem = {
				id: action.payload.id,
				name: action.payload.name,
				price: action.payload.price,
				img: action.payload.img,
				quantity: 1
			};
			let index = items.findIndex(item => item.id === action.payload.id);
			index === -1 ? items.push(newItem) : items[index].quantity++;
		},

		itemRemoved: (items, action) => {
			let index = items.findIndex(item => item.id === action.payload);
			if (index === -1) return;
			let itemQuantity = items[index].quantity;
			itemQuantity === 1 ? items.splice(index, 1) : items[index].quantity--;
		},

		itemsChanged: (items, action) => {}
	}
});

export const { itemAdded, itemRemoved, itemsChanged } = slice.actions;
export default slice.reducer;

// Selectors
export const getTotalItemsInCart = createSelector(
	state => state.shoppingCart,
	items => {
		let totalItems = 0;
		items.forEach(item => (totalItems += item.quantity));
		return totalItems;
	}
);
