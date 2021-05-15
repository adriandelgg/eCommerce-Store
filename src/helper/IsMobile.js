import { useState, useEffect } from 'react';

// Checks if viewport width is mobile sized.
const IsMobile = () => {
	const [isMobile, setIsMobile] = useState(true);

	const onResize = () => {
		if (window.innerWidth <= 620) setIsMobile(true);
		else setIsMobile(false);
	};

	// Checks if screen size is mobile on load.
	useEffect(() => {
		window.innerWidth <= 620 ? setIsMobile(true) : setIsMobile(false);
	}, []);

	// Checks for mobile size.
	useEffect(() => {
		window.addEventListener('resize', () => {
			onResize();
		});
		return () => {
			window.removeEventListener('resize', () => {
				onResize();
			});
		};
	});

	return { isMobile };
};

export default IsMobile;
