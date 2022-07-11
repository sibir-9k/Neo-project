import React from 'react'

import { Input } from "../../../UI/Input"
import { LoginButton } from '../../../UI/Button/Button'
import "./RegisterForm.scss"

export const RegisterForm = () => {
  // const [value, setValue] = useState('')

  return (
    <form className="reg-form">
      <Input
        label='Fullname'
        className="form-fullname__input"
        placeholder="Type your first and last name"
        labelClassName="form-fullname__label"
        wrapperLabel="reg-form__fullname form-fullname"
        type="text"
      />
      <Input
        label='Email'
        className="form-email__input"
        placeholder="Type your e-mail"
        labelClassName="form-email__label"
        wrapperLabel="reg-form__email form-email"
        type="email"
      />
      <Input
        label='Password'
        className="form-password__input"
        placeholder="Type your password"
        labelClassName="form-password__label"
        wrapperLabel="reg-form__password form-password"
        type="password"
      />
      <LoginButton />
    </form>
  )
}
