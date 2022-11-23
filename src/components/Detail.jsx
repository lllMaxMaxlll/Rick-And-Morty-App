import style from "./css-modules/Detail.module.css";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

const Detail = (props) => {
	const [character, setCharacter] = useState({});
	const { id } = useParams();
	const navigate = useNavigate();

	useEffect(() => {
		fetch(`https://rickandmortyapi.com/api/character/${id}`)
			.then((response) => response.json())
			.then((char) => {
				if (char.name) {
					setCharacter(char);
				} else {
					window.alert("No hay personajes con ese ID");
				}
			})
			.catch((err) => {
				window.alert("No hay personajes con ese ID");
			});
	}, [id]);

	const backToHome = () => {
		navigate("/home");
	};
	return (
		<div className={style.detail}>
			<h1>{character.name}</h1>
			<h1>{character.id}</h1>
			<h1>{character.species}</h1>
			<h1>{character.status}</h1>
			<button onClick={() => backToHome()}>Volver al home</button>
		</div>
	);
};

export default Detail;
