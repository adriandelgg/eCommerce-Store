import React from 'react';
import './cart.css';

import { useSelector, useDispatch } from 'react-redux';
import {
	Typography,
	IconButton,
	Paper,
	Select,
	NativeSelect,
	MenuItem,
	InputLabel
} from '@material-ui/core';
import { Remove, Add, DeleteForever } from '@material-ui/icons';
import {
	itemRemoved,
	itemAdded,
	itemDeleted,
	itemsChanged
} from '../../redux/shoppingCart';

// Creates item in cart
const CartProduct = () => {
	const shoppingCart = useSelector(state => state.shoppingCart);
	const dispatch = useDispatch();

	return (
		<>
			{shoppingCart.map(item => {
				const { id, name, img, price, quantity } = item;
				return (
					<Paper className="item-cart-container" elevation={2}>
						<img className="product-cart-img" src={img} alt="" />
						<Typography>{name}</Typography>
						<p>{price}</p>

						<IconButton onClick={() => dispatch(itemRemoved(id))}>
							<Remove />
						</IconButton>

						<InputLabel htmlFor={id}>Quantity:</InputLabel>
						<NativeSelect
							id={id}
							value={quantity}
							onChange={({ target: { value } }) =>
								dispatch(itemsChanged({ id, value }))
							}
						>
							<option value={0}>None</option>
							<option value={1}>1</option>
							<option value={2}>2</option>
							<option value={3}>3</option>
							<option value={4}>4</option>
							<option value={5}>5</option>
							<option value={6}>6</option>
							<option value={7}>7</option>
							<option value={8}>8</option>
							<option value={9}>9</option>
							<option value={10}>10</option>
						</NativeSelect>

						<IconButton
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
							<Add />
						</IconButton>
						<IconButton
							color="secondary"
							onClick={() => dispatch(itemDeleted(id))}
						>
							Delete
							<DeleteForever />
						</IconButton>
					</Paper>
				);
			})}
		</>
	);
};

export default CartProduct;
