import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';
import Products from './components/Products/Products';
import Favorites from './components/Favorites/Favorites';
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
				<Route path="/favorites" component={Favorites} />
			</Switch>
		</Router>
	);
};

export default App;
