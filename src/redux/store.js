import { configureStore } from '@reduxjs/toolkit';
import fetchProductsReducer, { getProducts } from './middleware/fetchProducts';
import shoppingCartReducer from './shoppingCart';
import favoritesReducer from './favorites';

const store = configureStore({
	reducer: {
		products: fetchProductsReducer,
		shoppingCart: shoppingCartReducer,
		favorites: favoritesReducer
	}
});

store.dispatch(getProducts());

export default store;
