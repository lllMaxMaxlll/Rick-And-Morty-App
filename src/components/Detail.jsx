import style from "./css-modules/Detail.module.css";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

const Detail = (props) => {
	const [character, setCharacter] = useState({
		name: "",
		status: "",
		species: "",
		gender: "",
		origin: {},
		location: {},
		image: "",
	});

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
		return setCharacter({
			name: "",
			status: "",
			species: "",
			gender: "",
			origin: {},
			location: {},
			image: "",
		});
	}, [id]);

	const backToHome = () => {
		navigate("/home");
	};

	return (
		<>
			<div className={style.detail}>
				<img
					src={character.image}
					alt={character.name}
					className={style.image}
				/>
				<div className={style.cardInfo}>
					<h1>{character.name}</h1>
					<div className={style.subtitle}>
						<div className={style.subtitle1}>
							<h2>Gender:</h2>
							<span>{character.gender}</span>
							<h2>Specie:</h2>
							<span>{character.species}</span>
							<h2>Origin:</h2>
							<span>{character.origin.name}</span>
						</div>
						<div className={style.subtitle1}>
							<h2>Status:</h2>
							<span>{character.status}</span>
							<h2>Type:</h2>
							<span>{character.type ? character.type : "Uknown"}</span>
							<h2>Location:</h2>
							<span>{character.location.name}</span>
						</div>
					</div>
				</div>
			</div>
			<button className={style.button} onClick={() => backToHome()}>
				Volver al home
			</button>
		</>
	);
};

export default Detail;
