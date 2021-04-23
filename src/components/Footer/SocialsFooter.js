import React from 'react';
import {
	FiGithub,
	FiLinkedin,
	FiInstagram,
	FiTwitter,
	FiMail
} from 'react-icons/fi';

const Socials = () => {
	return (
		<>
			<a
				href="https://github.com/adriandelgg"
				target="_blank"
				rel="noreferrer"
			>
				<FiGithub
					className="social-footer animation"
					size="1.5em"
					color="#2b2b2b"
				/>
			</a>
			<a
				href="https://www.linkedin.com/in/adriandelgado1/"
				target="_blank"
				rel="noreferrer"
			>
				<FiLinkedin
					className="social-footer animation"
					size="1.5em"
					color="#2b2b2b"
				/>
			</a>
			<a href="mailto:adriandelgado.tech@gmail.com">
				<FiMail
					className="social-footer animation"
					size="1.6em"
					color="#2b2b2b"
				/>
			</a>
			<a
				href="https://www.instagram.com/cloudcoding/"
				target="_blank"
				rel="noreferrer"
			>
				<FiInstagram
					className="social-footer animation"
					size="1.5em"
					color="#2b2b2b"
				/>
			</a>
			<a
				href="https://twitter.com/cloudcoding_"
				target="_blank"
				rel="noreferrer"
			>
				<FiTwitter
					className="social-footer animation"
					size="1.5em"
					color="#2b2b2b"
				/>
			</a>
		</>
	);
};

export default Socials;
