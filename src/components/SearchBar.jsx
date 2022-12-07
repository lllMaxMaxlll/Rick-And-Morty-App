import React from "react";
import styles from "./css-modules/Search.module.css";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import { IoSearch } from "react-icons/io5";

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
				type='text'
				placeholder='Agregar número ID (1 al 826)'
				className={styles.input}
				onChange={handleChange}
			/>
			<button
				className={styles.buttonadd}
				onClick={() => props.onSearch(text.text)}>
				<IoSearch />
			</button>
			<button
				className={styles.buttonRandom}
				onClick={() => props.onSearch(random)}>
				Random
			</button>
		</div>
	);
};

export default SearchBar;

// import { IoSearch } from "react-icons/io";
// IoSearch
