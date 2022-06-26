import React, { useState } from "react";
import moment from "moment";
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from "react-redux";

import "./Form.scss"
import "../../UI/Button/Button.scss"
import { CreateButton, CanselButton } from "../../UI/Button/Button";
import { Input } from "./Input/Input.jsx";
import { Select } from "./Select/Select.jsx";
import { Description } from "./Description/Description";
import { createRow } from "../../../store/action/actions";

export const Form = () => {

  const [form, setForm] = useState({ title: '', type: '', description: '' })
  const dispatch = useDispatch();

  const onCreatedClick = () => {
    const createOnObject = {
      title: form.title,
      type: form.type,
      description: form.description,
      status: '',
      create: moment().utc().format('DD/MM/YYYY'),
      id: uuidv4()
    }
    dispatch(createRow(createOnObject))
  }

  // const [title, setTitle] = useState('')
  // const [type, setType] = useState('')
  // const [description, setDescription] = useState('')

  // const onChangeTitle = (e) => {
  //   setTitle(e.target.value)
  // }
  // const onChangeType = (e) => {
  //   setType(e.target.value)
  // }
  // const onChangeDescription = (e) => {
  //   setDescription(e.target.value)
  // }

  // const handleAddElement = (e) => {
  //   e.preventDefault()
  //   const newForm = {
  //     ...form, id: Date.now()
  //   }
  //   setForm({ title: '', type: '', description: '' })
  //   console.log(newForm)
  // }

  return (
    // <form className="form">
    <>
      <Input
        onChangeTitle={e => setForm({ ...form, title: e.target.value })}
        type="text"
        value={form.title} />
      <Select
        onChangeType={e => setForm({ ...form, type: e.target.value })}
        type="text"
        value={form.type} />
      <Description
        onChangeDescription={e => setForm({ ...form, description: e.target.value })}
        type="text"
        value={form.description} />
      <CanselButton />
      <CreateButton onCreatedClick={onCreatedClick} />
    </>

    // </form>
  )
}
