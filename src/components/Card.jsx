import styles from "./Card.module.css";
import { GrClose } from "react-icons/gr";

export default function Card({ id, name, species, gender, image, onClose }) {
	return (
		<div className={styles.card}>
			<img className={styles.cardImg} src={image} alt={name} />
			<div className={styles.cardInfo}>
				<h2 className={styles.title}>{name}</h2>
				<div className={styles.subtitle}>
					<h2>{species}</h2>
					<h2>{gender}</h2>
				</div>
			</div>
			<button className={styles.button} onClick={() => onClose(id)}>
				<GrClose />
			</button>
		</div>
	);
}
