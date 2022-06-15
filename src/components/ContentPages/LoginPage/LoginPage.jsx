import React from "react";
import { StartImg, LogoLoginPage } from "../../../assets/img";
import { Footer } from "../../Element/Footer/Footer";
import { LoginForm } from "../../Element/LoginForm/LoginForm";

import "./LoginPage.scss"

export const LoginPage = () => {
  return (
    <>
      <div className="login-page">
        <div className="login-page__img">
          <img src={StartImg} alt="" />
        </div>
        <div className="login-page__form">
          <div className="">
            <img src={LogoLoginPage} alt="" />
          </div>
          <LoginForm />
        </div>
      </div>
      <Footer />
    </>
  )
}