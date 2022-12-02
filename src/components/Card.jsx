import styles from "./css-modules/Card.module.css";
import { GrClose } from "react-icons/gr";
import { MdOutlineFavoriteBorder, MdFavorite } from "react-icons/md";
import { NavLink } from "react-router-dom";
import { addFav, deleteFav } from "../redux/actions";
import { connect } from "react-redux";
import React from "react";

export const Card = (props) => {
	const [isFav, setIsFav] = React.useState(false);
	const { myFavorites } = props;

	const handleFavorite = () => {
		if (isFav) {
			setIsFav(false);
			props.deleteFav(props.id);
		} else {
			setIsFav(true);
			props.addFav(props);
		}
	};

	React.useEffect(() => {
		myFavorites.forEach((fav) => {
			if (fav.id === props.id) {
				setIsFav(true);
			}
		});
	}, [myFavorites, props.id]);

	return (
		<div className={styles.card}>
			{isFav ? (
				<MdFavorite className={styles.addFav} onClick={handleFavorite} />
			) : (
				<MdOutlineFavoriteBorder
					className={styles.borderFav}
					onClick={handleFavorite}
				/>
			)}
			<img className={styles.cardImg} src={props.image} alt={props.name} />
			<div className={styles.cardInfo}>
				<NavLink to={`/detail/${props.id}`}>
					<h2 className={styles.title}>{props.name}</h2>
				</NavLink>
				<div className={styles.subtitle}>
					<h2>{props.species}</h2>
					<h2>{props.gender}</h2>
				</div>
			</div>
			<button
				className={styles.button}
				onClick={() => props.onClose(props.id)}>
				<GrClose />
			</button>
		</div>
	);
};

/* eslint-disable */
const mapDispatchToProps = (dispatch) => {
	return {
		addFav: (props) => dispatch(addFav(props)),
		deleteFav: (id) => dispatch(deleteFav(id)),
	};
};
/* eslint-disable */

const mapStateToProps = (state) => {
	return {
		myFavorites: state.myFavorites,
	};
};

export default connect(mapStateToProps, { addFav, deleteFav })(Card);
