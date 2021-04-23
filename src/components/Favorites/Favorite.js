import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getFavoritedItems, itemUnfavorited } from '../../redux/favorites';
import { getItemsInCart, itemAdded } from '../../redux/shoppingCart';
import { Button, Container } from '@material-ui/core';
import { AddShoppingCart, Done, DeleteForever } from '@material-ui/icons';
import { Grid } from '@material-ui/core';
import { IconButton } from '@material-ui/core';

const Favorite = () => {
	const dispatch = useDispatch();
	const favoritedItems = useSelector(getFavoritedItems);
	const itemsInCart = useSelector(getItemsInCart);

	return (
		<Grid container justify="space-around" style={{ margin: '0 auto' }}>
			{favoritedItems.map(item => {
				const itemInCart = itemsInCart.includes(item.id);

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
						key={item.id}
					>
						<IconButton
							color="secondary"
							size="small"
							onClick={() => dispatch(itemUnfavorited(item.id))}
						>
							<DeleteForever />
						</IconButton>
						<img
							className="favorite-img"
							src={item.img}
							alt={item.name}
						/>
						<Container>
							<h3 className="favorite-name">{item.name}</h3>
							<p className="favorite-price">{item.price}</p>
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
											id: item.id,
											name: item.name,
											price: item.price,
											img: item.img
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
