import { useState } from "react";
import style from "./css-modules/Form.module.css";
import validate from "./validation";

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

	return (
		<div className={style.form}>
			<label>Username:</label>
			<input
				type='text'
				key='username'
				name='username'
				value={userData.username}
				placeholder='Username'
				onChange={handleInputChange}
			/>
			<label>Password:</label>
			<input
				type='text'
				key='password'
				name='password'
				value={userData.password}
				placeholder='Password'
				onChange={handleInputChange}
			/>
			<button type='submit'>Login</button>
		</div>
	);
};

export default Form;
