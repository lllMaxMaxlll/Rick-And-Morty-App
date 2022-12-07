import React from "react";
import SearchBar from "./SearchBar";
import styles from "./css-modules/Nav.module.css";
import logo from "./Logo";
import { NavLink, useLocation } from "react-router-dom";

const Nav = (props) => {
	const location = useLocation();
	return (
		<nav className={styles.nav}>
			<NavLink to={"/home"} className={styles.svglogo}>
				{logo}
			</NavLink>
			<div>
				<SearchBar onSearch={props.onSearch} />
				<NavLink to={"/home"}>
					<button
						className={
							location.pathname === "/home"
								? styles.active
								: styles.about
						}>
						Home
					</button>
				</NavLink>
				<NavLink to={"/about"}>
					<button
						className={
							location.pathname === "/about"
								? styles.active
								: styles.about
						}>
						About
					</button>
				</NavLink>
				<NavLink to={"/favorites"}>
					<button
						className={
							location.pathname === "/favorites"
								? styles.active
								: styles.about
						}>
						Favorites
					</button>
				</NavLink>

				<button onClick={() => props.logout()} className={styles.about}>
					Logout
				</button>
			</div>
		</nav>
	);
};

export default Nav;
