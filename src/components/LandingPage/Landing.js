import React from 'react';
import './landing.css';
import macbook from '../../img/macbookpro.webp';
import { Button, IconButton } from '@material-ui/core';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';

const Landing = () => {
	return (
		<section id="landing-page" className="landing-page">
			<div className="landing-container">
				<h2 className="landing-heading">MacBook Pro</h2>
				<h3 className="landing-paragraph">Powerful. Fast. Elegant.</h3>
				{/* <div className="landing-img"> */}
				<img className="macbook-img" src={macbook} alt="Macbook Pro" />
				{/* </div> */}
				<div className="landing-btns">
					<Button color="primary" variant="contained">
						Buy Now
					</Button>
					<Button color="primary" variant="outlined">
						Learn More
					</Button>
				</div>
				<IconButton>
					<a href="#products">
						<ArrowDownwardIcon color="primary" />
					</a>
				</IconButton>
			</div>
		</section>
	);
};

export default Landing;
