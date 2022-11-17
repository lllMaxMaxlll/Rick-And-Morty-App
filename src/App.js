import "./App.css";
import Cards from "./components/Cards.jsx";
import SearchBar from "./components/SearchBar.jsx";
import characters from "./data.js";

function App() {
	return (
		<div className='App'>
			<div className='logo'></div>
			<SearchBar onSearch={(characterID) => window.alert(characterID)} />
			<Cards characters={characters} />
		</div>
	);
}

export default App;
