import React, {useMemo} from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import axios from "axios";

import { setUsers } from "../../../../store/slices/userSlice";
import { Button } from "../../../UI/Button/Button";
import { useInput } from "../../../../hooks/useValidate/useValidation";
import Input from "../../../UI/Input.jsx";
import "./LoginForm.scss";


export const LoginForm = () => {
  const email = useInput("", { isEmpty: true, minLength: 2 });
  const password = useInput("", { isEmpty: true, minLength: 2 });

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const dataBase = axios.create({
    // Headers: null,
    baseURL: "http://localhost:3001/",
  });

  const authUser = (e) => {
    e.preventDefault();
    if (!email.inputValid || !password.inputValid) {
      console.log("error");
    } else {
      dataBase.post("/auth/login", {
        email: email.value,
        password: password.value,
      })
        .then((data) => {
          console.log(data);
          handleSubmit()
        })
        .catch((err) => { });
    }
  };

  const handleSubmit = async (e) => {
    console.log(email, password);
    dispatch(
      setUsers({
        email: email.value,
        password: password.value,
        loggetIn: true,
      })
    );
    navigate("/");
  };

  return (
    <>
      <form className="login-form" onSubmit={handleSubmit}>
        {email.isDirty && email.isEmpty && <span style={{ color: "#CC1F1F" }}>Mail field cannot be empty</span>}
        {useMemo(
          () => (
            <Input
              value={email.value}
              label="Email"
              className="form-email__input"
              placeholder="Type your e-mail"
              labelClassName="form-email__label"
              wrapperLabel="login-form__email form-email"
              type="email"
              htmlFor="email"
              id="email"
              onChangeValid={(e) => email.onChange(e)}
              onBlur={(e) => email.onBlur(e)}
            />
          ), [email.value])}

        {password.isDirty && password.isEmpty && <span style={{ color: "#CC1F1F" }}>Password field cannot be empty</span>}
        {useMemo(
          () => (
            <Input
              value={password.value}
              label="Password"
              className="form-password__input"
              placeholder="Type your password"
              labelClassName="form-password__label"
              wrapperLabel="login-form__password form-password"
              type="password"
              htmlFor="password"
              id="password"
              onChangeValid={(e) => password.onChange(e)}
              onBlur={(e) => password.onBlur(e)}
            />
          ), [password.value])}

        <div className="login-form__checkbox form-checkbox">
          <input className="form-checkbox__input" type="checkbox" id="check-login" name="check-login" />
          <label className="form-checkbox__label" htmlFor="check-login">
            Keep me logged in
          </label>
        </div>

        <Button value="Login" type="login/register" className="login-form__btn" onClick={authUser} />
      </form>
    </>
  );
};
