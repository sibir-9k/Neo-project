import React from "react";

import {ClaimForm} from "../../Element/Forms/ClaimForm/ClaimForm";
import {Navigation} from "../Navigation/Navigation";
import "./CreateClaimPage.scss";
import "../ContenContainer.scss";

export const CreateClaimPage = () => {
	return (
		<>
			<Navigation />
			<div className="container">
				<div className="title">
					<h1>Creating new claim</h1>
				</div>
				<ClaimForm />
			</div>
		</>
	);
};
