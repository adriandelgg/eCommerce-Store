import React from 'react';
import { useSelector } from 'react-redux';

import CartProduct from './CartProduct';
import TotalAmount from './TotalAmount';
import { getTotalItemsInCart } from '../../redux/shoppingCart';

const Cart = () => {
	const itemsInCart = useSelector(getTotalItemsInCart);

	const usdConverter = new Intl.NumberFormat('en-US', {
		style: 'currency',
		currency: 'USD',
		minimumFractionDigits: 2
	});

	return (
		<section className="shopping-cart">
			<h3 className="category-heading">Shopping Cart</h3>
			{itemsInCart === 0 ? (
				<h3>Empty Cart</h3>
			) : (
				<>
					<CartProduct usdConverter={usdConverter} />
					<TotalAmount usdConverter={usdConverter} />
				</>
			)}
		</section>
	);
};

export default Cart;
