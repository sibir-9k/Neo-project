import React from 'react'

import { Input } from "../../../UI/Input"
import { Button } from '../../../UI/Button/Button'
import { useInput } from "../../../../hooks/useValidate/useValidation";
import "./RegisterForm.scss"


export const RegisterForm = () => {
  const fullname = useInput('', { isEmpty: true, minLength: 1 })
  const email = useInput('', { isEmpty: true, minLength: 2 })
  const password = useInput('', { isEmpty: true, minLength: 2 })

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(fullname, email, password)

    const axios = require('axios').default;
    axios.post('http://localhost:3001/auth/registration', {
      fullName: fullname.value,
      email: email.value,
      password: password.value
    })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  return (
    <form className="reg-form" onSubmit={handleSubmit}>
      {(fullname.isDirty && fullname.isEmpty) && <span style={{ color: "#CC1F1F" }}>Name field cannot be empty</span>}
      <Input
        label='Fullname'
        className="form-fullname__input"
        placeholder="Type your first and last name"
        labelClassName="form-fullname__label"
        wrapperLabel="reg-form__fullname form-fullname"
        type="text"

        onChangeValid={e => fullname.onChange(e)}
        onBlur={e => fullname.onBlur(e)}
      />

      {(email.isDirty && email.isEmpty) && <span style={{ color: "#CC1F1F" }}>Mail field cannot be empty</span>}
      <Input
        label='Email'
        className="form-email__input"
        placeholder="Type your e-mail"
        labelClassName="form-email__label"
        wrapperLabel="reg-form__email form-email"
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
        wrapperLabel="reg-form__password form-password"
        type="password"

        onChangeValid={e => password.onChange(e)}
        onBlur={e => password.onBlur(e)}
      />

      <Button value="Register" type="login/register" className="login-form__btn" />
    </form>
  )
}
