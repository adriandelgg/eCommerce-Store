import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getFavoritedItems, itemUnfavorited } from '../../redux/favorites';
import { getItemsInCart, itemAdded } from '../../redux/shoppingCart';

import { Button, Container, Paper, Typography } from '@material-ui/core';
import { AddShoppingCart, Done, DeleteForever } from '@material-ui/icons';

const Favorite = () => {
	const dispatch = useDispatch();
	const favoritedItems = useSelector(getFavoritedItems);
	const itemsInCart = useSelector(getItemsInCart);

	return (
		<>
			{favoritedItems.map(item => {
				const itemInCart = itemsInCart.includes(item.id);

				return (
					<Paper className="favorite-item-container">
						<img className="favorite-img" src={item.img} alt="" />
						<Container>
							<Typography variant="h6" component="h3">
								{item.name}
							</Typography>
							<Typography>{item.price}</Typography>
							<Button
								variant="contained"
								color="primary"
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
							<Button
								// variant="outlined"
								color="secondary"
								endIcon={<DeleteForever />}
								onClick={() => dispatch(itemUnfavorited(item.id))}
							>
								Remove
							</Button>
						</Container>
					</Paper>
				);
			})}
		</>
	);
};

export default Favorite;
