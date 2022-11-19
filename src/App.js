import "./App.css";
import Cards from "./components/Cards.jsx";
import Nav from "./components/Nav";
import { useState } from "react";
import characters2 from "./data";

function App() {
	const [characters, setCharacters] = useState([]);

	const onSearch = (character) => {
		fetch(`https://rickandmortyapi.com/api/character/${character}`)
			.then((response) => response.json())
			.then((data) => {
				console.log(data.name);
				if (data.name) {
					setCharacters((oldChars) => [...oldChars, data]);
				} else {
					window.alert("No hay personajes con ese ID");
				}
			});
	};

	const onClose = () => window.alert("Emulamos que se cierra la card");

	return (
		<div className='App'>
			<div className='logo'></div>
			<Nav onSearch={onSearch} />
			<Cards characters={characters} onClose={onClose} />
		</div>
	);
}

export default App;
