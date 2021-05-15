import { createSlice } from '@reduxjs/toolkit';
import { createSelector } from 'reselect';

const slice = createSlice({
	name: 'cart',
	initialState: [],
	reducers: {
		itemAdded: (items, { payload }) => {
			let newItem = {
				id: payload.id,
				name: payload.name,
				price: payload.price,
				img: payload.img,
				quantity: 1
			};
			let index = items.findIndex(item => item.id === payload.id);
			index === -1 ? items.push(newItem) : items[index].quantity++;
		},

		itemRemoved: (items, { payload }) => {
			let index = items.findIndex(item => item.id === payload);
			if (index === -1) return;
			let itemQuantity = items[index].quantity;
			itemQuantity === 1 ? items.splice(index, 1) : items[index].quantity--;
		},

		itemsChanged: (items, { payload }) => {
			let index = items.findIndex(item => item.id === payload.id);
			items[index].quantity = Number(payload.value);
			if (items[index].quantity === 0) items.splice(index, 1);
		},

		itemDeleted: (items, { payload }) => {
			let index = items.findIndex(item => item.id === payload);
			items.splice(index, 1);
		}
	}
});

export const { itemAdded, itemRemoved, itemsChanged, itemDeleted } =
	slice.actions;
export default slice.reducer;

// Selectors

// Gets all the items in cart and their info
export const getAllItemsInCart = createSelector(
	state => state.shoppingCart,
	items => items
);

// Gets the numeric total of items in cart
export const getTotalItemsInCart = createSelector(
	state => state.shoppingCart,
	items => {
		let totalItems = 0;
		items.forEach(item => (totalItems += item.quantity));
		return totalItems;
	}
);

// Calculates the total price of all the items in cart
export const getTotalPriceAmount = createSelector(
	state => state.shoppingCart,
	items => {
		let totalAmount = 0;
		items.forEach(item => {
			totalAmount +=
				item.quantity * item.price.replace('$', '').replace(',', '');
		});
		return totalAmount;
	}
);

// Gets the IDs' of all the items in cart
export const getItemsInCart = createSelector(
	state => state.shoppingCart,
	items => items.map(item => item.id)
);
