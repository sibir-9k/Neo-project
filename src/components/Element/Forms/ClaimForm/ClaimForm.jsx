import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { dataBase } from "../../../../api/api";
import { Button } from "../../../UI/Button/Button";
import Input from "../../../UI/Input.jsx";
import { Select } from "./Select.jsx";
import { Description } from "./Description";
import { createClaim } from "../../../../store/slices/claimSlice";
import { useInput } from "../../../../hooks/useValidate/useValidation";
import "../../../UI/Button/Button.scss";
import "../../../ContentPages/CreateClaimPage/IncomingClaimPage/IncomingClaimPage.scss"

export default React.memo(function ClaimForm({ formData }) {
  const [form, setForm] = useState({ title: "", type: "", description: "" });

  const [types, setTypes] = useState([]);

  const title = useInput("", { isEmpty: true, minLength: 2 });
  const type = useInput("", { isEmpty: true });
  const description = useInput("", { isEmpty: true, minLength: 2 });

  const role = useSelector((state) => state.user.user.role);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (formData) {
      setForm({
        title: formData.title,
        description: formData.description,
        type: formData?.type?.slug,
        status: formData?.status?.slug,
        _id: formData._id,
      });
    }
    dataBase()
      .get("/types")
      .then(({ data }) => setTypes(data));
  }, []);

  const onCreatedClick = () => {
    if (!title.inputValid || !type.inputValid || !description.inputValid) {
      console.log("error");
    } else {
      dataBase()
        .post("/claim", {
          title: title.value,
          description: description.value,
          type: type.value,
        })
        .then((responce) => {
          if (responce && responce.status === 200) {
            const resClaim = {
              id: responce.data.id,
              title: responce.data.title,
              create: responce.data.create,
              type: responce.data.type.slug,
              status: responce.data.status.slug,
              description: responce.data.description,
            };
            dispatch(createClaim(resClaim));
            navigate("/");
          }
        })
        .catch((err) => { });
    }

    const addStatus = { ...form, status: "new" };
    dispatch(createClaim(addStatus));
    setForm({ title: "", type: "", description: "" });
  };

  return (
    <>
      {title.isDirty && title.isEmpty && <span style={{ color: "#CC1F1F" }}>Field cannot be empty</span>}

      <Input
        label="Title"
        className="form-title__input"
        placeholder="Type claim title"
        labelClassName="form-title__label"
        wrapperLabel="form-title"
        onChangeTitle={(e) => setForm({ ...form, title: e.target.value })}
        value={form.title}
        onChangeValid={(e) => title.onChange(e)}
        onBlur={(e) => title.onBlur(e)}
        disabled={role.slug === "admin" ? true : false}
      />

      {type.isDirty && type.isEmpty && <span style={{ color: "#CC1F1F" }}>Field cannot be empty</span>}
      <Select label="Type" className="form-type__select" onChangeType={(e) => setForm({ ...form, type: e.target.value })} value={form.type} onChangeValid={(e) => type.onChange(e)} onBlur={(e) => type.onBlur(e)} options={types} disabled={role.slug === "admin" ? true : false} />

      {description.isDirty && description.isEmpty && <span style={{ color: "#CC1F1F" }}>Field cannot be empty</span>}
      <Description
        label="Description"
        placeholder="Type claim description"
        className="form-description__textarea"
        onChangeDescription={(e) => setForm({ ...form, description: e.target.value })}
        value={form.description}
        onChangeValid={(e) => description.onChange(e)}
        onBlur={(e) => description.onBlur(e)}
        disabled={role.slug === "admin" ? true : false}
      />
      <div className="conteiner-btn">
        {role.slug === "work" && <Button value="Cansel" type="cansel" className="form-cansel__btn" />}
        {role.slug === "work" && (
          <Button
            value="Create"
            type="create"
            className="form-create__btn"
            disabled={!title.inputValid || !type.inputValid || !description.inputValid}
            onCreatedClick={() => {
              onCreatedClick(form);
            }}
          />
        )}
      </div>
    </>
  );
});
