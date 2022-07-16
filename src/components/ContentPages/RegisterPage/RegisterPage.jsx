import {React} from "react";
import {Link} from "react-router-dom";

import {StartImg, LogoLoginPage} from "../../../assets/img";
import {Footer} from "../../Element/Footer/Footer";
import {RegisterForm} from "../../Element/Forms/RegisterForm/RegisterForm";

export const RegisterPage = () => {
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
					<RegisterForm />
					<p>
						Already registered?
						<Link to="/login" className="req-registration">
							{" "}
							Let's go to your account
						</Link>
					</p>
				</div>
			</div>
			<Footer />
		</div>
	);
};
