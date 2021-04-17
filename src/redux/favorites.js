import { createSlice } from '@reduxjs/toolkit';
import { createSelector } from 'reselect';

const favorites = createSlice({
	name: 'favorites',
	initialState: [],
	reducers: {
		itemFavorited: (state, { payload }) => {
			let newItem = {
				id: payload.id,
				name: payload.name,
				price: payload.price,
				img: payload.img
			};
			state.push(newItem);
		},
		itemUnfavorited: (state, { payload }) => {
			let index = state.findIndex(item => item.id === payload);
			state.splice(index, 1);
		}
	}
});

export const { itemFavorited, itemUnfavorited } = favorites.actions;
export default favorites.reducer;

// Selectors
export const getFavoritedItemsTotal = createSelector(
	state => state.favorites,
	items => items.length
);
export const getHeartsFilled = createSelector(
	state => state.favorites,
	items => items.map(item => item.id)
);

export const getFavoritedItems = createSelector(
	state => state.favorites,
	items => items
);
