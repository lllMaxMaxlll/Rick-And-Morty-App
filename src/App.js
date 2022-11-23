import "./App.css";
import Logo from "./assets/logo.png";
import Cards from "./components/Cards.jsx";
import Nav from "./components/Nav";
import About from "./components/About";
import Detail from "./components/Detail";
import { useState } from "react";
import { Route, Routes } from "react-router-dom";

const App = () => {
	const [characters, setCharacters] = useState([]);

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

	return (
		<div className='App'>
			<Nav onSearch={onSearch} />
			<Routes>
				<Route
					path='/home'
					element={<Cards characters={characters} onClose={onClose} />}
				/>
				<Route path='/detail/:detailId' element={<Detail />} />
				<Route path='/about' element={<About />} />
			</Routes>
		</div>
	);
};

export default App;
