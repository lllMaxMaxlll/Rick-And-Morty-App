import { useState } from "react";
import style from "./css-modules/Form.module.css";
import validate from "./validation";
import portal from "../assets/portal3.png";

const Form = (props) => {
	const [userData, setUserData] = useState({
		username: "",
		password: "",
	});

	const [errors, setErrors] = useState({
		username: "",
		password: "",
	});

	const handleInputChange = (event) => {
		setUserData({ ...userData, [event.target.name]: event.target.value });
		setErrors(
			validate({
				...userData,
				[event.target.name]: event.target.value,
			})
		);
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		props.login(userData);
	};

	return (
		<div className={style.container}>
			<img src={portal} alt='portal' />
			<form className={style.form} onSubmit={handleSubmit}>
				<label>Username:</label>
				<input
					type='text'
					key='username'
					name='username'
					value={userData.username}
					placeholder='Username'
					onChange={handleInputChange}
				/>
				<span className={style.spanerror}>{errors.username}</span>

				<label>Password:</label>
				<input
					type='password'
					key='password'
					name='password'
					value={userData.password}
					placeholder='Password'
					onChange={handleInputChange}
				/>
				<span className={style.spanerror}>{errors.password}</span>

				<button type='submit' className={style.button}>
					Login
				</button>
			</form>
		</div>
	);
};

export default Form;
