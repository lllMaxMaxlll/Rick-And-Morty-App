import styles from "./Card.module.css";

export default function Card({ name, species, gender, image, onClose }) {
	return (
		<div className={styles.card}>
			<div className={styles.cardImg}>
				<img src={image} alt={name} />
			</div>
			<div className={styles.cardInfo}>
				<h2 className={styles.title}>{name}</h2>
				<h2 className={styles.subtitle}>{species}</h2>
				<h2 className={styles.subtitle}>{gender}</h2>
			</div>
			<button className={styles.button} onClick={onClose}>
				Close
			</button>
		</div>
	);
}
