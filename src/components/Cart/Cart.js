import React from 'react';
import { useSelector } from 'react-redux';

import CartProduct from './CartProduct';
import TotalAmount from './TotalAmount';
import { getTotalItemsInCart } from '../../redux/shoppingCart';
import IsMobile from '../../helper/IsMobile';
import MobileCart from './MobileCart';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { KeyboardReturn } from '@material-ui/icons';
import Coupon from './Coupon';

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
			<div className="cart-and-total">
				<div className="cart-containers">
					{itemsInCart === 0 ? (
						<h4 className="empty-heading">Empty Cart</h4>
					) : // Renders a desktop version or mobile version of cart
					!isMobile ? (
						<>
							<CartProduct usdConverter={usdConverter} />
						</>
					) : (
						<MobileCart />
					)}

					<Button
						component={Link}
						to="/"
						style={{ margin: '2em 0' }}
						startIcon={<KeyboardReturn />}
						variant="contained"
					>
						Continue Shopping
					</Button>
				</div>
				<hr className="hr-vertical" />
				<div className="total-and-coupon cart-containers">
					<TotalAmount usdConverter={usdConverter} />
					<Coupon />
				</div>
			</div>
		</section>
	);
};

export default Cart;
