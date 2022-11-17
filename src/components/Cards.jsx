import Card from "./Card";
import styles from "./Cards.module.css";

export default function Cards(props) {
	const { characters } = props;
	const cards = characters.map((elem) => (
		<Card
			name={elem.name}
			species={elem.species}
			gender={elem.gender}
			image={elem.image}
			onClick={elem.onClose}
		/>
	));
	return <div className={styles.cards}>{cards}</div>;
}
