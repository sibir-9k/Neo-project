import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { dataBase } from "../../../../api/api";
import ClaimForm from "../../../Element/Forms/ClaimForm/ClaimForm";
import { Button } from "../../../UI/Button/Button";
import "../../ContenContainer.scss";
import { Navigation } from "../../Navigation/Navigation";
import "./IncomingClaimPage.scss";

export const IncomingClaimPage = () => {
  const { id } = useParams();
  const [form, setForm] = useState(null);
  const [statuses, setStatuses] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    dataBase()
      .get("/status")
      .then(({ data }) => setStatuses(data));
    dataBase()
      .get(`/claim/${id}`)
      .then(({ data }) => setForm(data));
  }, []);

  const updateStatusClaim = (status) => {
    dataBase().put(`/claim/${id}`, { ...form, status: status.slug, type: form?.type?.slug })
      .then((response) => navigate("/"))

  };

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
          {statuses.map((status) => (
            <Button
              key={status.slug}
              className={`form-btn form-btn__${status.slug}`}
              value={status.name}
              type={status.slug}
              onClick={() => updateStatusClaim(status)}
            />
          ))}
        </div>
      </div>
    </>
  );
};
