import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';
import Products from './components/Products';
import { getProducts } from './redux/middleware/fetchProducts';

const App = () => {
	const dispatch = useDispatch();
	const data = useSelector(state => state.products.data);

	useEffect(() => {
		dispatch(getProducts());
	}, []);

	return (
		<Router>
			<Navbar />
			{/* Loads products when ready */}
			{data ? <Products /> : <h1>Loading...</h1>}
		</Router>
	);
};

export default App;
