import React from 'react';
import './navbar.css';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { getTotalItemsInCart } from '../../redux/shoppingCart';
import { RiCodeSSlashFill } from 'react-icons/ri';
import { Badge, IconButton } from '@material-ui/core';
import { ShoppingCart, Favorite, Home } from '@material-ui/icons';
import { getFavoritedItemsTotal } from '../../redux/favorites';

const Navbar = () => {
	const itemsInCart = useSelector(getTotalItemsInCart);
	const itemsFavorited = useSelector(getFavoritedItemsTotal);

	return (
		<header id="header">
			<RiCodeSSlashFill
				className="logo"
				size="2em"
				color="#f7bb50"
				style={{ marginLeft: '.5em' }}
			/>

			<nav className="nav-icons">
				<IconButton aria-label="Home" component={Link} to="/">
					<Home style={{ color: 'white' }} />
				</IconButton>

				<IconButton component={Link} to="/favorites" aria-label="Favorites">
					<Badge color="secondary" badgeContent={itemsFavorited}>
						<Favorite style={{ color: 'white' }} />
					</Badge>
				</IconButton>
				<IconButton
					component={Link}
					to="/shoppingcart"
					aria-label="Shopping Cart"
				>
					<Badge color="secondary" badgeContent={itemsInCart}>
						<ShoppingCart style={{ color: 'white' }} />
					</Badge>
				</IconButton>
			</nav>
		</header>
	);
};

export default Navbar;
