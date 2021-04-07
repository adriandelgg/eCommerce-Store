import React from 'react';
import Product from './Product';
import { Grid } from '@material-ui/core';

const Products = ({ data }) => {
	return (
		<>
			<Grid container component="main">
				<Product data={data} />
			</Grid>
		</>
	);
};

export default Products;
