import "./App.css";
import Cards from "./components/Cards.jsx";
import Nav from "./components/Nav";
import About from "./components/About";
import Detail from "./components/Detail";
import PageNotFound from "./components/PageNotFound";
import Form from "./components/Form";
import { useEffect } from "react";
import { useState } from "react";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import Logo from "./assets/logo.png";

const App = () => {
	const [characters, setCharacters] = useState([]);
	const [access, setAccess] = useState(false);
	const username = "max@mail.com";
	const password = "maxi1234";
	const navigate = useNavigate();

	if (useLocation().pathname === "/") {
		document.body.classList.add("bodyBlack");
	} else {
		document.body.classList.remove("bodyBlack");
	}

	const login = (userData) => {
		if (username === userData.username && password === userData.password) {
			setAccess(true);
			navigate("/home");
		}
	};

	const logout = () => {
		setAccess(false);
		navigate("/");
	};

	const onSearch = (character) => {
		fetch(`https://rickandmortyapi.com/api/character/${character}`)
			.then((response) => response.json())
			.then((data) => {
				if (data.id) {
					if (characters.some((char) => char.id === data.id)) {
						window.alert("Ya agregaste a ese personaje!");
					} else {
						setCharacters((oldChars) => [...oldChars, data]);
					}
				} else {
					window.alert("No hay personajes con ese ID");
				}
			});
	};

	const onClose = (id) => {
		setCharacters((characters) =>
			characters.filter((char) => char.id !== id)
		);
	};

	/* eslint-disable */
	useEffect(() => {
		!access && navigate("/");
	}, [access]);
	/* eslint-disable */

	return (
		<div className='App'>
			<Nav onSearch={onSearch} logout={logout} />
			<img
				src={Logo}
				alt='imagen'
				className={useLocation().pathname === "/" ? "logoLogin" : "logo"}
			/>
			<Routes>
				<Route exact path='/' element={<Form login={login} />} />
				<Route
					path='/home'
					element={<Cards characters={characters} onClose={onClose} />}
				/>
				<Route path='/detail/:id' element={<Detail />} />
				<Route path='/about' element={<About />} />
				<Route path='*' element={<PageNotFound />} />
			</Routes>
		</div>
	);
};

export default App;
