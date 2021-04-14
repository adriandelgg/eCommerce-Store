import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import {
	Typography,
	Grid,
	Card,
	Badge,
	IconButton,
	Container
} from '@material-ui/core';
import {
	ShoppingCart,
	RemoveShoppingCart,
	AddShoppingCart,
	AccountBox,
	Search
} from '@material-ui/icons';
import { getTotalItemsInCart } from '../../redux/shoppingCart';

const Navbar = () => {
	const itemsInCart = useSelector(getTotalItemsInCart);

	return (
		<Grid container component="header">
			<Grid item xs={4} lg={4}>
				<Typography variant="h5" component="h2">
					Peruvian Designs
				</Typography>
			</Grid>
			<Grid item xs={4} lg={4} component="nav">
				<Link to="/">Home</Link>
				<Link>About</Link>
			</Grid>
			<Grid item xs={4} lg={4}>
				<IconButton>
					<Search />
				</IconButton>
				<IconButton>
					<AccountBox />
				</IconButton>
				{/* Link to Cart */}
				<IconButton>
					<Badge color="secondary" badgeContent={itemsInCart}>
						<ShoppingCart />
					</Badge>
				</IconButton>
			</Grid>
		</Grid>
	);
};

export default Navbar;
