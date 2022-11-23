import React from "react";
import SearchBar from "./SearchBar";
import styles from "./css-modules/Nav.module.css";
import Logo from "../assets/logo.png";
import { NavLink } from "react-router-dom";

const Nav = (props) => {
	return (
		<nav className={styles.nav}>
			<NavLink to={"/home"} className={styles.home}>
				<img src={Logo} alt='logo' className={styles.logo} />
			</NavLink>
			<SearchBar onSearch={props.onSearch} />
			<NavLink to={"/about"} className={styles.about}>
				<span>About</span>
			</NavLink>
		</nav>
	);
};

export default Nav;
