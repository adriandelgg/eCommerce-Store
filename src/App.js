import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';
import Products from './components/Products';
import Cart from './components/Cart/Cart';
import { getProducts } from './redux/middleware/fetchProducts';

const App = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getProducts());
	}, []);

	return (
		<Router>
			<Navbar />

			<Switch>
				<Route exact path="/" component={Products} />
				<Route path="/shoppingcart" component={Cart} />
			</Switch>
		</Router>
	);
};

export default App;
