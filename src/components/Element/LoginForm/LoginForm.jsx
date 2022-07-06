import React from "react";

import { Link } from "react-router-dom";
import { LoginButton, RegButton } from "../../UI/Button/Button";
import "./LoginForm.scss"
import {IconLock, IconMail} from "../../../assets/img/index.js"





    // <form className="login-form">
    // <div className="login-form__name form-email">
    //     <label className="form-name__label" for="fullname">
    //       Full name:
    //       <input type="text" className="form-email__input" id="fullname" name="fullname" placeholder="Type your full name" required />
    //     </label>
    //   </div>
    //   <div className="login-form__email form-email">
    //     <label className="form-email__label" for="email">
    //       Email:
    //       <input type="email" className="form-email__input" id="email" name="email" placeholder="Type your e-mail" required />
    //     </label>
    //   </div>
    //   <div className="login-form__password form-password">
    //     <label className="form-password__label" for="password">
    //       Password:
    //       <input type="password" className="form-password__input" id="password" name="password" placeholder="Type your password" required />
    //     </label>
    //   </div>
    //   <RegButton />
    // </form>

export const LoginForm = () => {


  // const [loginForm, setLoginForm] = useState()

  return (
    <>
     <form className="login-form">
      <div className="login-form__email form-email">
        <label className="form-email__label" for="email">
          Email:
          <input type="email" className="form-email__input" id="email" name="email" placeholder="Type your e-mail" required />
        </label>
        <div className="form-email__img"><img src={IconMail} alt="" /></div>
      </div>
      <div className="login-form__password form-password">
        <label className="form-password__label" for="password">
          Password:
          <input type="password" className="form-password__input" id="password" name="password" placeholder="Type your password" required />
        </label>
        <div className="form-password__img"><img src={IconLock} alt="" /></div>
      </div>
      <div className="login-form__checkbox form-checkbox">
        <input className="form-checkbox__input" type="checkbox" id="check-login" name="check-login" />
        <label className="form-checkbox__label" for="check-login">Keep me logged in</label>
      </div>
      <LoginButton />
    </form>
    <p>Not a member? <Link to="#" className="req-registration" >Request registration.</Link></p>

    </>
   
    
  )
}