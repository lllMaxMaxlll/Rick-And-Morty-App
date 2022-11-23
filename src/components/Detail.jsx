import style from "./css-modules/Detail.module.css";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const Detail = (props) => {
	const [character, setCharacter] = useState({});
	const { detailId } = useParams();

	useEffect(() => {
		fetch(`https://rickandmortyapi.com/api/character/${detailId}`)
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
		return setCharacter({});
	}, [detailId]);

	console.log(character);
	return (
		<div className={style.detail}>
			<h1>{character.name}</h1>
			<h1>{character.id}</h1>
			<h1>{character.species}</h1>
			<h1>{character.status}</h1>
		</div>
	);
};

export default Detail;
