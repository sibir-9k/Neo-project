import React, { useEffect, useState } from "react";

import { ClaimForm } from "../../../Element/Forms/ClaimForm/ClaimForm";
import { Button } from "../../../UI/Button/Button";
import { Navigation } from "../../Navigation/Navigation";
import { dataBase } from "../../../../api/api";
import { useParams } from "react-router-dom";
import "./IncomingClaimPage.scss";
import "../../ContenContainer.scss";

export const IncomingClaimPage = () => {
  const { id } = useParams();
  const [form, setForm] = useState(null);

  useEffect(() => {
    dataBase()
      .get(`/claim/${id}`)
      .then((response) => setForm(response.data));
  }, []);

  return (
    <>
      <Navigation />
      <div className="container">
        <div className="title">
          <h1>Incoming claim</h1>
        </div>
        {form && <ClaimForm formData={form} />}
        <div className="conteiner-btn">
          <Button type="cansel" className="form-cansel__btn" value="Cansel" />
          <Button type="create" className="form-create__btn" value="Done" />
          <Button type="create" className="form-decline__btn" value="Decline" />
        </div>
      </div>
    </>
  );
};
