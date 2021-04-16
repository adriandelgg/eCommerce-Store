import React, { useState } from 'react';
import { IconButton } from '@material-ui/core';
import { FavoriteBorder, Favorite } from '@material-ui/icons';
import { useDispatch } from 'react-redux';
import { itemFavorited, itemUnfavorited } from '../redux/favorites';

const HeartIcon = ({ newItem, id }) => {
	const [heartFilled, setHeartFilled] = useState(false);
	const dispatch = useDispatch();

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
