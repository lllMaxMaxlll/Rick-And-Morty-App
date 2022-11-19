import React from "react";
import SearchBar from "./SearchBar";
import styles from "./Nav.module.css";

const Nav = (props) => {
	return (
		<nav className={styles.nav}>
			<SearchBar onSearch={props.onSearch} />
		</nav>
	);
};

export default Nav;
