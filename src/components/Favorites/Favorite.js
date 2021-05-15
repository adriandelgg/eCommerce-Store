import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getFavoritedItems, itemUnfavorited } from '../../redux/favorites';
import { getItemsInCart, itemAdded } from '../../redux/shoppingCart';

import { Button, Container, Grid, IconButton } from '@material-ui/core';
import { AddShoppingCart, Done, DeleteForever } from '@material-ui/icons';

const Favorite = () => {
	const dispatch = useDispatch();
	// Gets all favorited items info
	const favoritedItems = useSelector(getFavoritedItems);
	// Gets items in cart's ID to help update the UI in the favorites page
	const itemsInCart = useSelector(getItemsInCart);

	// Populates  a container holding all the favorited items
	return (
		<Grid container justify="space-around" style={{ margin: '0 auto' }}>
			{favoritedItems.map(item => {
				const { id, name, img, price } = item;
				const itemInCart = itemsInCart.includes(id);

				return (
					<Grid
						item
						xs={11}
						sm={6}
						style={{
							margin: '1em 0',
							maxWidth: '30em'
						}}
						className="favorite-item-container"
						key={id}
					>
						<IconButton
							color="secondary"
							size="small"
							onClick={() => dispatch(itemUnfavorited(id))}
						>
							<DeleteForever />
						</IconButton>
						<img className="favorite-img" src={img} alt={name} />
						<Container>
							<h3 className="favorite-name">{name}</h3>
							<p className="favorite-price">{price}</p>
							<Button
								variant="contained"
								color="primary"
								className="add-cart-btn"
								style={{ fontSize: '.8rem' }}
								disabled={itemInCart ? true : false}
								startIcon={itemInCart ? <Done /> : <AddShoppingCart />}
								onClick={() =>
									dispatch(
										itemAdded({
											id,
											name,
											price,
											img
										})
									)
								}
							>
								{itemInCart ? 'Added to Cart!' : 'Add to Cart'}
							</Button>
						</Container>
					</Grid>
				);
			})}
		</Grid>
	);
};

export default Favorite;
