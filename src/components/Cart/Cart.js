import React from 'react';
import { Typography } from '@material-ui/core';
import CartProduct from './CartProduct';

const Cart = () => {
	return (
		<main>
			<Typography variant="h2">Cart</Typography>
			<CartProduct />
		</main>
	);
};

export default Cart;
