import React from "react";

import { StartImg, LogoLoginPage } from "../../../assets/img";
import { Footer } from "../../Element/Footer/Footer";
import { LoginForm } from "../../Element/Forms/LoginForm/LoginForm";
import "./LoginPage.scss"

export const LoginPage = () => {
  return (
    <div className="wrapper">
      <div className="login-page">
        <div className="login-page__img">
          <img src={StartImg} alt="" />
        </div>
        <div className="login-page__form form">
          <div className="form__img">
            <img src={LogoLoginPage} alt="" />
          </div>
          <LoginForm />
        </div>
      </div>
      <Footer />
    </div>
  )
}