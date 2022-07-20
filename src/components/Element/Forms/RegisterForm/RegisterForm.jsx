import React from "react";
import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";

import {dataBase} from "../../../../api/api";
import {setUsers} from "../../../../store/slices/userSlice";
import {Input} from "../../../UI/Input";
import {Button} from "../../../UI/Button/Button";
import {useInput} from "../../../../hooks/useValidate/useValidation";
import "./RegisterForm.scss";

export const RegisterForm = () => {
	const fullname = useInput("", {isEmpty: true, minLength: 1});
	const email = useInput("", {isEmpty: true, minLength: 2});
	const password = useInput("", {isEmpty: true, minLength: 2});

	const navigate = useNavigate();
	const dispatch = useDispatch();

	const handleSubmit = async (e) => {
		dispatch(
			setUsers({
				fullname: fullname.value,
				email: email.value,
				password: password.value,
				loggetIn: true,
			})
		);
		navigate("/login");
	};

	const createNewUser = (e) => {
		e.preventDefault();
		if (!email.inputValid || !password.inputValid || !fullname.inputValid) {
			console.log("error");
		} else {
			dataBase
				.post("auth/registration", {
					fullName: fullname.value,
					email: email.value,
					password: password.value,
				})
				.then((data) => {
					console.log(data);
					handleSubmit();
				})
				.catch((err) => {});
		}
	};

	return (
		<form className="reg-form" onSubmit={handleSubmit}>
			{fullname.isDirty && fullname.isEmpty && <span style={{color: "#CC1F1F"}}>Name field cannot be empty</span>}
			<Input label="Fullname" className="form-fullname__input" placeholder="Type your first and last name" labelClassName="form-fullname__label" wrapperLabel="reg-form__fullname form-fullname" type="text" onChangeValid={(e) => fullname.onChange(e)} onBlur={(e) => fullname.onBlur(e)} />

			{email.isDirty && email.isEmpty && <span style={{color: "#CC1F1F"}}>Mail field cannot be empty</span>}
			<Input label="Email" className="form-email__input" placeholder="Type your e-mail" labelClassName="form-email__label" wrapperLabel="reg-form__email form-email" type="email" onChangeValid={(e) => email.onChange(e)} onBlur={(e) => email.onBlur(e)} />

			{password.isDirty && password.isEmpty && <span style={{color: "#CC1F1F"}}>Password field cannot be empty</span>}
			<Input label="Password" className="form-password__input" placeholder="Type your password" labelClassName="form-password__label" wrapperLabel="reg-form__password form-password" type="password" onChangeValid={(e) => password.onChange(e)} onBlur={(e) => password.onBlur(e)} />

			<Button value="Register" type="login/register" className="login-form__btn" onClick={createNewUser} />
		</form>
	);
};
