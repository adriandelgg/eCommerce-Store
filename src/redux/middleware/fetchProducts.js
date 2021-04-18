import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { commerce } from '../../lib/commerce';

// Fetches products
export const getProducts = createAsyncThunk(
	'productsData/getProducts',
	async (arg, thunkAPI) => {
		const response = await commerce.products.list();
		return response.data;
	}
);

const productsSlice = createSlice({
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
export default productsSlice.reducer;
