import React from "react";
import styles from "./Search.module.css";
import { useState } from "react";

export default function SearchBar(props) {
	const [text, setText] = useState("");

	const handleChange = (event) => {
		setText({ ...text, text: event.target.value });
	};

	return (
		<div>
			<input
				type='search'
				placeholder='Agregar'
				className={styles.input}
				onChange={handleChange}
			/>
			<button
				className={styles.button}
				onClick={() => props.onSearch(text.text)}>
				Agregar
			</button>
		</div>
	);
}
