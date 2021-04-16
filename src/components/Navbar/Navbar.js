import React from 'react';
import './navbar.css';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import IsMobile from '../../helper/IsMobile';

import { getTotalItemsInCart } from '../../redux/shoppingCart';
import { Typography, Badge, IconButton } from '@material-ui/core';
import { ShoppingCart, AccountBox, Search, Favorite } from '@material-ui/icons';
import { getFavoritedItemsTotal } from '../../redux/favorites';

const Navbar = () => {
	const { isMobile } = IsMobile();
	const itemsInCart = useSelector(getTotalItemsInCart);
	const itemsFavorited = useSelector(getFavoritedItemsTotal);

	return (
		<header>
			{!isMobile && (
				<Typography className="logo" variant="h5" component="h2">
					Peruvian Designs
				</Typography>
			)}
			<nav>
				<Link to="/">Home</Link>
				<Link to="/">About</Link>
			</nav>
			<div className="nav-icons">
				{!isMobile && (
					<IconButton aria-label="Search">
						<Search />
					</IconButton>
				)}

				<IconButton component={Link} to="/favorites" aria-label="Favorites">
					<Badge color="secondary" badgeContent={itemsFavorited}>
						<Favorite />
					</Badge>
				</IconButton>
				<IconButton
					component={Link}
					to="/shoppingcart"
					aria-label="Shopping Cart"
				>
					<Badge color="secondary" badgeContent={itemsInCart}>
						<ShoppingCart />
					</Badge>
				</IconButton>
			</div>
		</header>
	);
};

export default Navbar;
