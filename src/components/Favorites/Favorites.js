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
			{totalFavorites ? (
				<>
					<Typography variant="h1">Items Favorited:</Typography>
					<Favorite />
				</>
			) : (
				<Typography variant="h2">You have no items favorited.</Typography>
			)}
		</section>
	);
};

export default Favorites;
