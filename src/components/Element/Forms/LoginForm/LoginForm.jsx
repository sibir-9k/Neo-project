import React from "react";

import { LoginButton } from "../../../UI/Button/Button";
import { useInput } from "../../../../hooks/useValidate/useValidation";
import { Input } from "../../../UI/Input.jsx";
import "./LoginForm.scss"

export const LoginForm = () => {

  const email = useInput('', { isEmpty: true, minLength: 2 })
  const password = useInput('', { isEmpty: true, minLength: 2 })

  return (
    <>
      <form className="login-form">
        {(email.isDirty && email.isEmpty) && <span style={{ color: "#CC1F1F" }}>Mail field cannot be empty</span>}
        <Input
          label='Email'
          className="form-email__input"
          placeholder="Type your e-mail"
          labelClassName="form-email__label"
          wrapperLabel="login-form__email form-email"
          type="email"

          onChangeValid={e => email.onChange(e)}
          onBlur={e => email.onBlur(e)}
          
        />

        {(password.isDirty && password.isEmpty) && <span style={{ color: "#CC1F1F" }}>Password field cannot be empty</span>}
        <Input
          label='Password'
          className="form-password__input"
          placeholder="Type your password"
          labelClassName="form-password__label"
          wrapperLabel="login-form__password form-password"
          type="password"

          onChangeValid={e => password.onChange(e)}
          onBlur={e => password.onBlur(e)}
        />

        <div className="login-form__checkbox form-checkbox">
          <input className="form-checkbox__input" type="checkbox" id="check-login" name="check-login" />
          <label className="form-checkbox__label" htmlFor="check-login">Keep me logged in</label>
        </div>

        <LoginButton value="Login"/>
      </form>
    </>


  )
}