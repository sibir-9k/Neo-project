import React from "react";

import "./LoginForm.scss"


export const LoginForm = () => {
  return(
    <form className="login-form">
    <div className="login-form__email form-email">
      <label className="form-email__label" for="email">
        Email:
        <input type="email" className="form-email__input" id="email" name="email" placeholder="Type your e-mail" required />
      </label>
    </div>
    <div className="login-form__password form-password">
      <label className="form-password__label" for="password">
        Password:
        <input type="password" className="form-password__input" id="password" name="password" placeholder="Type your password" required/>
      </label>
    </div>
    <div className="login-form__checkbox form-checkbox">
      <input className="form-checkbox__input" type="checkbox" id="check-login" name="check-login"/>
      <label className="form-checkbox__label" for="check-login">Keep me logged in</label>
    </div>
  </form>
  )
}