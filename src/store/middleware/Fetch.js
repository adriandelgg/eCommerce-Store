import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getProducts } from './fetchProducts';

const Fetch = () => {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(getProducts());
	}, [dispatch]);
	return <div></div>;
};

export default Fetch;
