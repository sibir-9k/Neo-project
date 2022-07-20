import { React } from "react";
import { Link } from "react-router-dom";

import { StartImg, LogoLoginPage } from "../../../assets/img";
import { Footer } from "../../Element/Footer/Footer";
import  LoginForm  from "../../Element/Forms/LoginForm/LoginForm";
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
          <p>Not a member? 
            <Link to="/register" className="req-registration"> Request registration.</Link>
          </p>
        </div>
      </div>
      <Footer />
    </div>
  )
}