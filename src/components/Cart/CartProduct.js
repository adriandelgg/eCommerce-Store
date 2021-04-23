import React from 'react';
import './cart.css';

import { useSelector, useDispatch } from 'react-redux';
import {
	IconButton,
	InputLabel,
	TableContainer,
	TableHead,
	Table,
	TableRow,
	TableCell,
	TableBody
} from '@material-ui/core';
import { Remove, Add, DeleteForever } from '@material-ui/icons';
import {
	itemRemoved,
	itemAdded,
	itemDeleted,
	itemsChanged,
	getAllItemsInCart
} from '../../redux/shoppingCart';
import { Input } from '@material-ui/core';
import { FormControl } from '@material-ui/core';

// Creates item in cart
const CartProduct = ({ usdConverter }) => {
	const shoppingCart = useSelector(getAllItemsInCart);
	const dispatch = useDispatch();

	return (
		<>
			<TableContainer>
				<Table>
					<TableHead>
						<TableRow>
							<TableCell>Product</TableCell>
							<TableCell>Price</TableCell>
							<TableCell>Quantity</TableCell>
							<TableCell>Subtotal</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{shoppingCart.map(item => {
							const { id, name, img, price, quantity } = item;

							return (
								<TableRow>
									<TableCell component="th" scope="row">
										<div className="img-and-name">
											<IconButton
												color="secondary"
												onClick={() => dispatch(itemDeleted(id))}
												size="small"
												edge="start"
											>
												<DeleteForever />
											</IconButton>
											<img
												className="product-cart-img"
												src={img}
												alt=""
											/>
											<p className="product-font">{name}</p>
										</div>
									</TableCell>
									<TableCell>
										<p>{price}</p>
									</TableCell>
									<TableCell>
										<div className="quantity-container">
											<IconButton
												onClick={() => {
													if (quantity === 1) return;
													dispatch(itemRemoved(id));
												}}
											>
												<Remove />
											</IconButton>
											<FormControl>
												<InputLabel htmlFor={id}>
													Quantity:
												</InputLabel>
												<Input
													id={id}
													style={{ width: '3em' }}
													type="number"
													value={quantity}
													onChange={({ target: { value } }) => {
														if (value < 1) return;
														dispatch(itemsChanged({ id, value }));
													}}
												/>
											</FormControl>
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
										</div>
									</TableCell>
									<TableCell>
										{usdConverter.format(
											quantity *
												Number(
													price.replace('$', '').replace(',', '')
												)
										)}
									</TableCell>
								</TableRow>
							);
						})}
					</TableBody>
				</Table>
			</TableContainer>
		</>
	);
};

export default CartProduct;
