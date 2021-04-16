import { configureStore } from '@reduxjs/toolkit';
import fetchProductsReducer from './middleware/fetchProducts';
import shoppingCartReducer from './shoppingCart';
import favoritesReducer from './favorites';

const store = configureStore({
	reducer: {
		products: fetchProductsReducer,
		shoppingCart: shoppingCartReducer,
		favorites: favoritesReducer
	}
});

export default store;
