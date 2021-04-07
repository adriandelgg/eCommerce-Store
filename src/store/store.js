import { configureStore } from '@reduxjs/toolkit';
// import reducer from './reducers/reducer';
// import { fetchData } from './fetchProducts';
import fetchReducer from './middleware/fetchProducts';
import shoppingCartReducer from './shoppingCart';

const store = configureStore({
	reducer: {
		products: fetchReducer,
		shoppingCart: shoppingCartReducer
	}
});

export default store;
