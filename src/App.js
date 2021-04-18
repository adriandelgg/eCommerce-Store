import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';
import Products from './components/Products/Products';
import Favorites from './components/Favorites/Favorites';
import Cart from './components/Cart/Cart';

const App = () => {
	return (
		<Router>
			<Navbar />
			<main>
				<Switch>
					<Route exact path="/" component={Products} />
					<Route path="/shoppingcart" component={Cart} />
					<Route path="/favorites" component={Favorites} />
				</Switch>
			</main>
		</Router>
	);
};

export default App;
