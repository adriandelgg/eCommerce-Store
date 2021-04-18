import React from 'react';

import { useSelector, useDispatch } from 'react-redux';
import {
	IconButton,
	Paper,
	InputLabel,
	TableContainer,
	TableHead,
	Table,
	TableRow,
	TableCell,
	TableBody,
	Button
} from '@material-ui/core';

import { Remove, Add, DeleteForever, ArrowBack } from '@material-ui/icons';
import {
	itemRemoved,
	itemAdded,
	itemDeleted,
	itemsChanged,
	getAllItemsInCart
} from '../../redux/shoppingCart';
import { Input } from '@material-ui/core';
import { FormControl } from '@material-ui/core';

const MobileCart = () => {
	const shoppingCart = useSelector(getAllItemsInCart);
	const dispatch = useDispatch();

	return (
		<>
			<TableContainer>
				<Table>
					<TableHead>
						<TableRow>
							<TableCell>Product</TableCell>
							<TableCell>Quantity</TableCell>
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
												style={{
													width: '1em',
													paddingRight: '.4em'
												}}
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
											<div className="product-font">
												<p className="product-name">{name}</p>
												<p>
													{quantity} x {price}
												</p>
											</div>
										</div>
									</TableCell>
									<TableCell>
										<div className="quantity-container">
											<IconButton
												size="small"
												edge="start"
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
												size="small"
												edge="end"
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
								</TableRow>
							);
						})}
					</TableBody>
				</Table>
			</TableContainer>
		</>
	);
};

export default MobileCart;
