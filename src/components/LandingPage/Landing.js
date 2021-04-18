import React from 'react';
import './landing.css';
import { Typography, Button } from '@material-ui/core';

const Landing = () => {
	return (
		<section id="landing-page">
			<div className="landing-content">
				<h2 className="landing-heading">Macbook Pro</h2>
				<p className="landing-paragraph">
					Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad
					excepturi molestiae corrupti quas, temporibus doloremque.
					Expedita sapiente quam quo autem corporis excepturi rem placeat
					temporibus!
				</p>
				<Button color="secondary" variant="contained">
					Buy now
				</Button>
			</div>
		</section>
	);
};

export default Landing;
