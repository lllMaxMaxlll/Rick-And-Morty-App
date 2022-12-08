import Card from "../Card";
import styles from "./Favorites.module.css";
import { connect, useDispatch } from "react-redux";
import { filterCards, orderCards } from "../../redux/actions";

export const Favorites = (props) => {
	const dispatch = useDispatch();

	const favCards = props.myFavorites.map((elem) => (
		<Card
			key={elem.id}
			name={elem.name}
			species={elem.species}
			gender={elem.gender}
			image={elem.image}
			id={elem.id}
			status={elem.status}
		/>
	));

	const handleOrder = (e) => {
		dispatch(orderCards(e.target.value));
	};

	const handleFilter = (e) => {
		dispatch(filterCards(e.target.value));
	};

	return (
		<div className={styles.container}>
			<div className={styles.selectors}>
				<select
					name='order'
					onChange={handleOrder}
					className={styles.select}>
					<option value='ascendente'>Ascendente</option>
					<option value='descendente'>Descendiente</option>
				</select>
				<select
					name='gender'
					onChange={handleFilter}
					className={styles.select}>
					<option value='All'>All</option>
					<option value='Male'>Male</option>
					<option value='Female'>Female</option>
					<option value='Genderless'>Genderless</option>
					<option value='unknown'>Unknown</option>
				</select>
			</div>
			<div className={styles.cards}>{favCards}</div>
		</div>
	);
};

const mapStateToProps = (state) => {
	return {
		myFavorites: state.myFavorites,
	};
};

export default connect(mapStateToProps, null)(Favorites);
