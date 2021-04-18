import React from 'react';

import { Button } from '@material-ui/core';
import { FormControl, InputLabel, Input } from '@material-ui/core';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';

const Coupon = () => {
	return (
		<div>
			<h4 className="coupon-heading">
				{<LocalOfferIcon style={{ marginRight: '.3em' }} />}Coupon
			</h4>

			<Input
				style={{
					border: '1px gray solid',
					width: '100%',
					margin: '1.5em 0'
				}}
				placeholder="Coupon code"
			/>
			<Button style={{ width: '100%' }} variant="contained">
				Apply Coupon
			</Button>
		</div>
	);
};

export default Coupon;
