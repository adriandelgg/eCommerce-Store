import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import ScrollToTop from './helper/ScrollToTop';
import Navbar from './components/Navbar/Navbar';
import Products from './components/Products/Products';
import Favorites from './components/Favorites/Favorites';
import Cart from './components/Cart/Cart';
import Footer from './components/Footer/Footer';

const App = () => {
	return (
		<Router>
			<ScrollToTop /> 
			<Navbar />
			<main>
				<Switch>
					<Route exact path="/" component={Products} />
					<Route path="/shoppingcart" component={Cart} />
					<Route path="/favorites" component={Favorites} />
				</Switch>
			</main>
			<Footer />
		</Router>
	);
};

export default App;
