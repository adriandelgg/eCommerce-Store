import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import HeartIcon from '../../helper/heartIcon';

import {
	getItemsInCart,
	itemAdded,
	itemRemoved
} from '../../redux/shoppingCart';
import {
	Card,
	Button,
	CardMedia,
	Grid,
	CardActions,
	CardContent,
	CardHeader
} from '@material-ui/core';
import { AddShoppingCart, Done } from '@material-ui/icons';

const Product = () => {
	const dispatch = useDispatch();
	// Gets the data of the Fetched API to populate the products.
	const data = useSelector(state => state.products.data);
	const itemsInCart = useSelector(getItemsInCart);

	return (
		<>
			{data.map(item => {
				let newItem = {
					id: item.id,
					name: item.name,
					price: item.price.formatted_with_symbol,
					img: item.media.source
				};
				const itemInCart = itemsInCart.includes(item.id);

				return (
					<Grid
						item
						xs={10}
						sm={4}
						lg={3}
						key={item.id}
						id={item.id}
						style={{ padding: '.8em .7em' }}
					>
						<Card elevation={6}>
							<CardMedia>
								<img src={item.media.source} alt="" width="100%" />
							</CardMedia>
							<CardHeader
								title={item.name}
								style={{ fontWeight: 500 }}
								action={<HeartIcon newItem={newItem} id={item.id} />}
								disableTypography
							/>
							<CardContent className="card-content">
								{item.price.formatted_with_symbol}
							</CardContent>

							<CardActions>
								<Button
									className="card-content"
									variant="contained"
									color="primary"
									disabled={itemInCart ? true : false}
									startIcon={
										itemInCart ? <Done /> : <AddShoppingCart />
									}
									onClick={() => dispatch(itemAdded(newItem))}
								>
									{itemInCart ? 'Added to Cart!' : 'Add to Cart'}
								</Button>
								{itemInCart && (
									<Button
										color="secondary"
										onClick={() => dispatch(itemRemoved(item.id))}
									>
										Remove
									</Button>
								)}
							</CardActions>
						</Card>
					</Grid>
				);
			})}
		</>
	);
};

export default Product;
