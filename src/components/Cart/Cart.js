import React from 'react';
import { useSelector } from 'react-redux';
import { Typography } from '@material-ui/core';
import CartProduct from './CartProduct';
import { getTotalItemsInCart } from '../../redux/shoppingCart';

const Cart = () => {
	const itemsInCart = useSelector(getTotalItemsInCart);

	return (
		<main>
			<Typography variant="h2">Cart</Typography>
			{itemsInCart === 0 ? <h3>Empty Cart</h3> : <CartProduct />}
		</main>
	);
};

export default Cart;
