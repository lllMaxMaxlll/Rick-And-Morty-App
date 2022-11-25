const validate = (inputs) => {
	const errors = {};
	const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
	const regexPassword = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,10}$/g;

	if (!regexEmail.test(inputs.username) || inputs.username.length > 35) {
		errors.username = "Debe ser un correo electrónico";
	}

	if (!regexPassword.test(inputs.password)) {
		errors.password =
			"La contraseña de tener entre 6 y 10 caracteres y debe incluir un número";
	}
	return errors;
};
export default validate;
