import React from "react";
import SearchBar from "./SearchBar";
import styles from "./css-modules/Nav.module.css";
import logo from "./Logo";
import { NavLink } from "react-router-dom";

const Nav = (props) => {
	return (
		<nav className={styles.nav}>
			<NavLink to={"/home"} className={styles.svglogo}>
				{logo}
			</NavLink>
			<SearchBar onSearch={props.onSearch} />
			<NavLink
				to={"/about"}
				className={(navData) =>
					navData.isActive ? styles.active : "none"
				}>
				<button className={styles.about}>About</button>
			</NavLink>
		</nav>
	);
};

export default Nav;
