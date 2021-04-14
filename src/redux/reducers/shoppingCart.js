import { combineReducers } from 'redux';
import shoppingCartReducer from '../shoppingCart';

export default combineReducers({
	shoppingCart: shoppingCartReducer
});
