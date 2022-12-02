import Card from "../Card";
import styles from "./Favorites.module.css";
import { connect } from "react-redux";

export const Favorites = (props) => {
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
	return <div className={styles.cards}>{favCards}</div>;
};

const mapStateToProps = (state) => {
	return {
		myFavorites: state.myFavorites,
	};
};

export default connect(mapStateToProps, null)(Favorites);
