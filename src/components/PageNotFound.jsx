import React from "react";
import NotFound from "../assets/404notFound.png";
import NotFoundMorty from "../assets/morty2.png";
import style from "./css-modules/PageNotFound.module.css";

const PageNotFound = () => (
	<div className={style.notFound}>
		<img src={NotFound} alt='NotFound404' className={style.rick} />
		<img src={NotFoundMorty} alt='NotFound404' className={style.morty} />
		<h1>404</h1>
		<h2>Not Found</h2>
	</div>
);

export default PageNotFound;
