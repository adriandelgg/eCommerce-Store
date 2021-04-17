import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
	getItemsInCart,
	itemAdded,
	itemRemoved
} from '../../redux/shoppingCart';
import {
	Card,
	Typography,
	Button,
	CardMedia,
	Grid,
	CardActions,
	CardContent
} from '@material-ui/core';
import { ExpandMoreIcon, AddShoppingCart, Done } from '@material-ui/icons';
import { CardHeader } from '@material-ui/core';
import HeartIcon from '../../helper/heartIcon';

const Product = () => {
	const dispatch = useDispatch();
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
					<Grid item xs={11} sm={4} lg={3} key={item.id} id={item.id}>
						<Card elevation={6}>
							<CardMedia>
								<img src={item.media.source} alt="" width="100%" />
							</CardMedia>
							<CardHeader
								title={item.name}
								action={<HeartIcon newItem={newItem} id={item.id} />}
							/>
							<CardContent>
								<Typography>
									{item.description
										.replaceAll('<p>', '')
										.replaceAll('</p>', '')}
								</Typography>
								<Typography variant="h6">
									{item.price.formatted_with_symbol}
								</Typography>
							</CardContent>

							<CardActions>
								<Button
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
										// variant="contained"
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
