import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// Scrolls to the top when going to a different page for React-Router
const ScrollToTop = () => {
	const { pathname } = useLocation();

	useEffect(() => {
		window.scrollTo(0, 0);
	}, [pathname]);

	return null;
};

export default ScrollToTop;
