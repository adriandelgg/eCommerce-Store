import React from 'react';
import './favorites.css';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import Favorite from './Favorite';
import { getFavoritedItemsTotal } from '../../redux/favorites';
import { Button } from '@material-ui/core';
import { ArrowForward, KeyboardReturn } from '@material-ui/icons';

const Favorites = () => {
	const totalFavorites = useSelector(getFavoritedItemsTotal);

	return (
		<section>
			<h3 className="category-heading">Saved Items</h3>
			<Favorite />

			{!totalFavorites ? (
				<>
					<h4 className="empty-heading">You have no saved items.</h4>
					<div className="favorite-btn">
						<Button
							component={Link}
							to="/"
							variant="contained"
							startIcon={<KeyboardReturn />}
						>
							Continue Shopping
						</Button>
					</div>
				</>
			) : (
				<div className="favorite-btn">
					<Button
						component={Link}
						to="/shoppingcart"
						variant="contained"
						endIcon={<ArrowForward />}
					>
						Proceed to Cart
					</Button>
				</div>
			)}
		</section>
	);
};

export default Favorites;
