import React from 'react';

import {
	IconButton,
	Paper,
	InputLabel,
	TableContainer,
	Table,
	TableHead,
	TableRow,
	TableCell,
	TableBody
} from '@material-ui/core';
import { Button } from '@material-ui/core';
import { useSelector } from 'react-redux';
import { getTotalPriceAmount } from '../../redux/shoppingCart';

const TotalAmount = ({ usdConverter }) => {
	const totalPrices = useSelector(getTotalPriceAmount);

	return (
		<>
			<h3>Cart Totals</h3>
			<TableContainer>
				<Table>
					<TableBody>
						<TableRow>
							<TableCell>Subtotal</TableCell>
							<TableCell align="right">
								{usdConverter.format(totalPrices)}
							</TableCell>
						</TableRow>
						<TableRow>
							<TableCell>Shipping</TableCell>
							<TableCell align="right">Free Shipping!</TableCell>
						</TableRow>
						<TableRow>
							<TableCell>Tax</TableCell>
							<TableCell align="right">Tax based on zip code</TableCell>
						</TableRow>
						<TableRow>
							<TableCell>Subtotal</TableCell>
							<TableCell align="right">
								{usdConverter.format(totalPrices)}
							</TableCell>
						</TableRow>
					</TableBody>
				</Table>
			</TableContainer>
			<Button variant="contained">Proceed to Checkout</Button>
		</>
	);
};

export default TotalAmount;
