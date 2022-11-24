import React from "react";
import styles from "./css-modules/Search.module.css";
import { useState } from "react";
import { NavLink } from "react-router-dom";

export default function SearchBar(props) {
	const [text, setText] = useState("");

	const handleChange = (event) => {
		setText({ ...text, text: event.target.value });
	};

	const random = Math.floor(Math.random() * 826);

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
			<button
				className={styles.button}
				onClick={() => props.onSearch(random)}>
				Random
			</button>
		</div>
	);
}
