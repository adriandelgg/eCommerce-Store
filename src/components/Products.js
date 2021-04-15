import React from 'react';
import { useSelector } from 'react-redux';

import Product from './Product';
import { Grid, CircularProgress } from '@material-ui/core';

const Products = () => {
	const data = useSelector(state => state.products.data);

	return (
		<>
			<Grid container component="main">
				{data ? <Product /> : <CircularProgress />}
			</Grid>
		</>
	);
};

export default Products;
