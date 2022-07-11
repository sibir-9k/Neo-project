import React, { useState } from "react";
import moment from "moment";
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from "react-redux";

// import "./ClaimForm.scss"
import "../../../UI/Button/Button.scss"
import { CreateButton, CanselButton } from "../../../UI/Button/Button";
import { Input } from "../../../UI/Input.jsx";
import { Select } from "./Select.jsx";
import { Description } from "./Description";
import { createRow } from "../../../../store/action/actions";
import { useNavigate } from "react-router-dom";
import { useInput } from "../../../../hooks/useValidate/useValidation";

export const ClaimForm = () => {

  const [form, setForm] = useState({ title: '', type: '', description: '' })
  const title = useInput('', { isEmpty: true, minLength: 2 })
  const type = useInput('', { isEmpty: true })
  const description = useInput('', { isEmpty: true, minLength: 2 })

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onCreatedClick = () => {
    const createOnObject = {
      title: form.title,
      type: form.type,
      description: form.description,
      status: '',
      create: moment().utc().format('DD/MM/YYYY'),
      id: uuidv4(),
    }
    dispatch(createRow(createOnObject));
    setForm({ title: '', type: '', description: '' });
    navigate('/')
  }

  return (
    <>
      {(title.isDirty && title.isEmpty) && <span style={{ color: "#CC1F1F" }}>Field cannot be empty</span>}
      <Input
        label="Title"
        className="form-title__input"
        placeholder='Type claim title'
        labelClassName = "form-title__label"
        wrapperLabel="form-title"
        onChangeTitle={e => setForm({ ...form, title: e.target.value })}
        value={form.title}
        onChangeValid={e => title.onChange(e)}
        onBlur={e => title.onBlur(e)}
      />

      {(type.isDirty && type.isEmpty) && <span style={{ color: "#CC1F1F" }}>Field cannot be empty</span>}
      <Select
        label="Type"
        className="form-type__select"

        onChangeType={e => setForm({ ...form, type: e.target.value })}
        value={form.type}
        onChangeValid={e => type.onChange(e)}
        onBlur={e => type.onBlur(e)}
      />

      {(description.isDirty && description.isEmpty) && <span style={{ color: "#CC1F1F" }}>Field cannot be empty</span>}
      <Description
        label="Description"
        placeholder="Type claim description"
        className="form-description__textarea"

        onChangeDescription={e => setForm({ ...form, description: e.target.value })}
        value={form.description}
        onChangeValid={e => description.onChange(e)}
        onBlur={e => description.onBlur(e)}
      />
      <CanselButton />
      <CreateButton disabled={!title.inputValid || !type.inputValid || !description.inputValid} onCreatedClick={() => { onCreatedClick() }} />
    </>
  )
}
