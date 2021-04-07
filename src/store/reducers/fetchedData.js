import { combineReducers } from 'redux';
import fetchDataReducer from '../middleware/fetchProducts';

export default combineReducers({
	data: fetchDataReducer
});
