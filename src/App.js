import "./App.css";
import Cards from "./components/Cards.jsx";
import Nav from "./components/Nav";
import { useState } from "react";

function App() {
	const [characters, setCharacters] = useState([]);

	const onSearch = (character) => {
		fetch(`https://rickandmortyapi.com/api/character/${character}`)
			.then((response) => response.json())
			.then((data) => {
				if (data.id) {
					console.log(data);
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
			<div className='logo'></div>
			<Nav onSearch={onSearch} />
			<Cards characters={characters} onClose={onClose} />
		</div>
	);
}

export default App;
