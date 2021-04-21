import React from 'react';
import './landing.css';
import macbook from '../../img/macbookpro.webp';
import { Button, IconButton } from '@material-ui/core';
import { ArrowDownward, NavigateNext } from '@material-ui/icons';

const Landing = () => {
	return (
		<section id="landing-page" className="landing-page">
			<div className="landing-container">
				<h2 className="landing-heading">MacBook Pro</h2>
				<h3 className="landing-paragraph">Powerful. Fast. Elegant.</h3>
				<img className="macbook-img" src={macbook} alt="Macbook Pro" />
				<div className="landing-btns">
					<Button
						color="primary"
						variant="contained"
						style={{ marginBottom: '1em' }}
					>
						Buy Now
					</Button>
					<Button
						color="primary"
						variant="outlined"
						endIcon={<NavigateNext />}
					>
						Learn More
					</Button>
				</div>
				<IconButton
					style={{
						position: 'absolute',
						bottom: 0,
						opacity: '0',
						transition: 'opacity 1s 3s'
					}}
				>
					<a href="#products">
						<ArrowDownward color="primary" />
					</a>
				</IconButton>
			</div>
		</section>
	);
};

export default Landing;
