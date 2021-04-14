import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { itemAdded, itemRemoved } from '../redux/shoppingCart';
import {
	Card,
	Typography,
	Button,
	Container,
	CardMedia,
	Grid
} from '@material-ui/core';
import { ExpandMoreIcon, AddShoppingCart } from '@material-ui/icons';

const Product = () => {
	const dispatch = useDispatch();
	const data = useSelector(state => state.products.data);

	return (
		<>
			{data.map(item => {
				return (
					<Grid
						item
						xs={12}
						// sm={8}
						md={4}
						lg={3}
						key={item.id}
						id={item.id}
					>
						<Container>
							<Card elevation={6}>
								<CardMedia>
									<img src={item.media.source} alt="" width="100%" />
								</CardMedia>
								<Typography variant="h5">{item.name}</Typography>
								<Typography variant="h6">
									{item.price.formatted_with_symbol}
								</Typography>
								<Button
									variant="contained"
									color="primary"
									startIcon={<AddShoppingCart />}
									onClick={() =>
										dispatch(
											itemAdded({
												id: item.id,
												name: item.name,
												price: item.price.formatted_with_symbol,
												img: item.media.source
											})
										)
									}
								>
									Add to Cart
								</Button>
								<Button
									variant="contained"
									color="primary"
									onClick={() => dispatch(itemRemoved(item.id))}
								>
									Remove
								</Button>
							</Card>
						</Container>
					</Grid>
				);
			})}
		</>
	);
};

export default Product;
