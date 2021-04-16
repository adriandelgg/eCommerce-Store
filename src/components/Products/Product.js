import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { itemAdded, itemRemoved } from '../../redux/shoppingCart';
import {
	Card,
	Typography,
	Button,
	CardMedia,
	Grid,
	CardActions,
	IconButton
} from '@material-ui/core';
import { ExpandMoreIcon, AddShoppingCart } from '@material-ui/icons';
import { CardHeader } from '@material-ui/core';
import HeartIcon from '../../helper/heartIcon';

const Product = () => {
	const dispatch = useDispatch();
	const data = useSelector(state => state.products.data);

	return (
		<>
			{data.map(item => {
				let newItem = {
					id: item.id,
					name: item.name,
					price: item.price.formatted_with_symbol,
					img: item.media.source
				};

				return (
					<Grid item xs={11} sm={4} lg={3} key={item.id} id={item.id}>
						<Card elevation={6}>
							<CardHeader
								title={item.name}
								action={<HeartIcon newItem={newItem} id={item.id} />}
							/>
							<CardMedia>
								<img src={item.media.source} alt="" width="100%" />
							</CardMedia>
							<Typography variant="h6">
								{item.price.formatted_with_symbol}
							</Typography>

							<CardActions>
								<Button
									variant="contained"
									color="primary"
									startIcon={<AddShoppingCart />}
									onClick={() => dispatch(itemAdded(newItem))}
								>
									Add to Cart
								</Button>
								<Button
									// variant="contained"
									color="primary"
									onClick={() => dispatch(itemRemoved(item.id))}
								>
									Remove
								</Button>
							</CardActions>
						</Card>
					</Grid>
				);
			})}
		</>
	);
};

export default Product;
