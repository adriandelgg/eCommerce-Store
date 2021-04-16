import React from 'react';
import './products.css';
import { useSelector } from 'react-redux';

import Product from './Product';
import { Grid, CircularProgress } from '@material-ui/core';

const Products = () => {
	const data = useSelector(state => state.products.data);

	return (
		<>
			<Grid
				className="products-container"
				container
				component="main"
				spacing={4}
				justify="center"
			>
				{data ? <Product /> : <CircularProgress />}
			</Grid>
		</>
	);
};

export default Products;
