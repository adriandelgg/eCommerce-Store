import React from 'react';
import './favorites.css';
import Favorite from './Favorite';

import { useSelector } from 'react-redux';
import { getFavoritedItemsTotal } from '../../redux/favorites';
import { Typography } from '@material-ui/core';

const Favorites = () => {
	const totalFavorites = useSelector(getFavoritedItemsTotal);
	console.log(totalFavorites);

	return (
		<section>
			<h3 className="category-heading">Saved Items</h3>
			<Favorite />

			{!totalFavorites && <h4>You have no saved items.</h4>}
		</section>
	);
};

export default Favorites;
