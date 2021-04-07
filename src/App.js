import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { commerce } from './lib/commerce';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Grid } from '@material-ui/core';

import Navbar from './components/Navbar';
import Products from './components/Products';
import Fetch from './store/middleware/Fetch';
import { productsData } from './store/middleware/fetchProducts';

// import { productsData } from './store/fetchProducts';
// import { getProducts } from './store/fetchProducts';

const App = () => {
	// const [data, setData] = useState(null);
	// const dispatch = useDispatch();
	// dispatch(getProducts());
	// console.log(getProducts());
	const data = useSelector(productsData);

	// const dispatch = useDispatch();
	// dispatch(getProducts());
	// console.log(getProducts());
	// const { data, isLoading, hasError } = useSelector(productsData);

	// Fetches products
	// useEffect(() => {
	// 	(async () => {
	// 		try {
	// 			const response = await commerce.products.list();
	// 			setData(response);
	// 			console.dir(response);
	// 		} catch (e) {
	// 			console.log(e);
	// 		}
	// 	})();
	// }, []);

	return (
		<Router>
			{/* <Navbar data={data} /> */}
			{/* Loads products when ready */}
			{/* {data ? <Products data={data} /> : <h1>Loading...</h1>} */}
		</Router>
	);
};

export default App;
