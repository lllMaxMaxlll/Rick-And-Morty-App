import React from "react";
import styles from "./css-modules/Search.module.css";
import { useState } from "react";
import { useLocation } from "react-router-dom";

const SearchBar = (props) => {
	const [text, setText] = useState("");

	const handleChange = (event) => {
		setText({ ...text, text: event.target.value });
	};

	let location = useLocation();

	const random = Math.floor(Math.random() * 826);

	return (
		<div
			className={
				location.pathname === "/home" ? styles.searchbar : styles.hidden
			}>
			<input
				type='search'
				placeholder='Agregar número ID (1 al 826)'
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
};

export default SearchBar;
