import React from "react";
import SearchBar from "./SearchBar";
import styles from "./css-modules/Nav.module.css";
import logo from "./Logo";
import { NavLink, useLocation } from "react-router-dom";

const Nav = (props) => {
	const location = useLocation();
	return (
		<nav className={styles.nav}>
			<NavLink to={"/"} className={styles.svglogo}>
				{logo}
			</NavLink>
			<SearchBar onSearch={props.onSearch} />
			<NavLink to={"/about"}>
				<button
					className={
						location.pathname === "/about" ? styles.active : styles.about
					}>
					About
				</button>
			</NavLink>
		</nav>
	);
};

export default Nav;
