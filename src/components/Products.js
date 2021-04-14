import React from 'react';
import Product from './Product';
import { Grid } from '@material-ui/core';

const Products = () => {
	return (
		<>
			<Grid container component="main">
				<Product />
			</Grid>
		</>
	);
};

export default Products;
