import React from 'react';

import {
	Paper,
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
			{/* <h3>Cart Totals</h3> */}
			<TableContainer>
				<Table>
					<TableHead>
						<TableRow>
							<TableCell colSpan={2}>Cart Total</TableCell>
						</TableRow>
					</TableHead>
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
							<TableCell style={{ fontWeight: 500 }}>Total</TableCell>
							<TableCell align="right">
								{usdConverter.format(totalPrices)}
							</TableCell>
						</TableRow>
					</TableBody>
				</Table>
			</TableContainer>
			<Button
				style={{
					margin: '2em 0',
					width: '100%'
				}}
				variant="contained"
			>
				Proceed to Checkout
			</Button>
		</>
	);
};

export default TotalAmount;
