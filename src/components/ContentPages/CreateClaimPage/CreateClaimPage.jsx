import React from "react";

import { Form } from "../../Element/Form/Form";
import { Navigation } from "../Navigation/Navigation";
import "./CreateClaimPage.scss"
import "../ContenContainer.scss"

export const CreateClaimPage = () => {
  return (
    <>
      <Navigation />
      <div className="container">
        <div className="title">
          <h1>Creating new claim</h1>
        </div>
        <Form />
      </div>
    </>
  )
}
