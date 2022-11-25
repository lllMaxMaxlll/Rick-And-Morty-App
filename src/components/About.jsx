import style from "./css-modules/About.module.css";
import { useNavigate } from "react-router-dom";
import FotoPerfil from "../assets/perfil.png";

const About = () => {
	const navigate = useNavigate();

	const backToHome = () => {
		navigate("/home");
	};
	return (
		<>
			<div className={style.detail}>
				<img src={FotoPerfil} alt='foto-perfil' className={style.image} />
				<div className={style.cardInfo}>
					<h1>Maximiliano Matias Herr</h1>
					<div className={style.subtitle}>
						<div className={style.subtitle1}>
							<h2>Gender:</h2>
							<span>Male</span>
							<h2>Specie:</h2>
							<span>Human</span>
							<h2>Origin:</h2>
							<span>Earth</span>
						</div>
						<div className={style.subtitle1}>
							<h2>Status:</h2>
							<span>Alive</span>
							<h2>Type:</h2>
							<span>Developer</span>
							<h2>Location:</h2>
							<span>Behind your screen</span>
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

export default About;
