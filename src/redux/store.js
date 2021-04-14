import { configureStore } from '@reduxjs/toolkit';
import fetchProductsReducer from './middleware/fetchProducts';
import shoppingCartReducer from './shoppingCart';

const store = configureStore({
	reducer: {
		products: fetchProductsReducer,
		shoppingCart: shoppingCartReducer
	}
});

export default store;
