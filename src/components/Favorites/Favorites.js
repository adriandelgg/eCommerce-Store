import React from 'react';
import './favorites.css';
import Favorite from './Favorite';

import { useSelector } from 'react-redux';
import { getFavoritedItemsTotal } from '../../redux/favorites';

const Favorites = () => {
	const totalFavorites = useSelector(getFavoritedItemsTotal);

	return (
		<section>
			<h3 className="category-heading">Saved Items</h3>
			<Favorite />

			{!totalFavorites && <h4>You have no saved items.</h4>}
		</section>
	);
};

export default Favorites;
