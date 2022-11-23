import React from "react";
import SearchBar from "./SearchBar";
import styles from "./css-modules/Nav.module.css";
import Logo from "../assets/logo.png";
import { NavLink } from "react-router-dom";

const Nav = (props) => {
	return (
		<nav className={styles.nav}>
			<img src={Logo} alt='logo' className='logo' />
			<SearchBar onSearch={props.onSearch} />
			<NavLink to={"/home"}>
				<span>Home</span>
			</NavLink>
			<NavLink to={"/about"}>
				<span>About</span>
			</NavLink>
		</nav>
	);
};

export default Nav;
