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
			<div className={styles.buttons}>
				<SearchBar onSearch={props.onSearch} />
				<div>
					<NavLink to={"/home"}>
						<button
							className={
								location.pathname === "/home"
									? styles.active
									: styles.button
							}>
							Home
						</button>
					</NavLink>
					<NavLink to={"/about"}>
						<button
							className={
								location.pathname === "/about"
									? styles.active
									: styles.button
							}>
							About
						</button>
					</NavLink>
					<NavLink to={"/favorites"}>
						<button
							className={
								location.pathname === "/favorites"
									? styles.active
									: styles.button
							}>
							Favorites
						</button>
					</NavLink>
					<button onClick={() => props.logout()} className={styles.button}>
						Logout
					</button>
				</div>
			</div>
		</nav>
	);
};

export default Nav;
