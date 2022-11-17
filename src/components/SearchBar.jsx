import styles from "./Search.module.css";

export default function SearchBar(props) {
	return (
		<div>
			<input type='search' placeholder='Agregar' className={styles.input} />
			<button className={styles.button} onClick={props.onSearch}>
				Agregar
			</button>
		</div>
	);
}
