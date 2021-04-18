import React from 'react';
import { useSelector } from 'react-redux';

import CartProduct from './CartProduct';
import TotalAmount from './TotalAmount';
import { getTotalItemsInCart } from '../../redux/shoppingCart';
import IsMobile from '../../helper/IsMobile';
import MobileCart from './MobileCart';

const Cart = () => {
	const itemsInCart = useSelector(getTotalItemsInCart);
	const { isMobile } = IsMobile();

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
			) : !isMobile ? ( // Renders a desktop version or mobile version of cart
				<>
					<CartProduct usdConverter={usdConverter} />
				</>
			) : (
				<MobileCart />
			)}
			<TotalAmount usdConverter={usdConverter} />
		</section>
	);
};

export default Cart;
