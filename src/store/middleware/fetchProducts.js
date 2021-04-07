import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { createSelector } from 'reselect';
import { commerce } from '../../lib/commerce';

export const getProducts = createAsyncThunk(
	'fetchData',
	async (arg, thunkAPI) => {
		const response = await commerce.products.list();
		const data = await response.json();
		return data;
	}
);

const slice = createSlice({
	name: 'productsData',
	initialState: {
		data: null,
		isLoading: false,
		hasError: false
	},
	reducers: {},
	extraReducers: {
		[getProducts.pending]: (state, action) => {
			state.isLoading = true;
			state.hasError = false;
		},
		[getProducts.fulfilled]: (state, { payload }) => {
			state.data = payload;
			state.isLoading = false;
			state.hasError = false;
		},
		[getProducts.rejected]: (state, action) => {
			state.isLoading = false;
			state.hasError = true;
		}
	}
});

// Exports the extraReducers
export default slice.reducer;

// Selectors
export const productsData = createSelector(state => state.data);
// console.log(productsData);
