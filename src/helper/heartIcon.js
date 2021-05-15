import React, { useEffect, useState } from 'react';
import { IconButton } from '@material-ui/core';
import { FavoriteBorder, Favorite } from '@material-ui/icons';
import { useDispatch, useSelector } from 'react-redux';
import {
	getHeartsFilled,
	itemFavorited,
	itemUnfavorited
} from '../redux/favorites';

// Used to toggle the heart icon for favorites.
const HeartIcon = ({ newItem, id }) => {
	const [heartFilled, setHeartFilled] = useState(false);
	const dispatch = useDispatch();
	const favoritedItems = useSelector(getHeartsFilled);

	useEffect(() => {
		if (favoritedItems.includes(id)) {
			setHeartFilled(true);
		}
	}, []);

	const toggleHeart = () => {
		setHeartFilled(prev => !prev);
		if (!heartFilled) {
			dispatch(itemFavorited(newItem));
		} else {
			dispatch(itemUnfavorited(id));
		}
	};

	return (
		<IconButton onClick={toggleHeart}>
			{heartFilled ? (
				<Favorite color="secondary" />
			) : (
				<FavoriteBorder color="secondary" />
			)}
		</IconButton>
	);
};

export default HeartIcon;
