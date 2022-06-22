import React, {useState} from "react";
import {IconArrowDown} from "../../../assets/img/index.js"
import "./Form.scss"
import "../../UI/Button/Button.scss"
export const Form = () => {

  const[title, setTitle] = useState('')
  const[type, setType] = useState('')
  const[description, setDescription] = useState('')

  const onChangeTitle = (e) => {
    setTitle(e.target.value)
  }
  const onChangeType = (e) => {
    setType(e.target.value)
  }
  const onChangeDescription = (e) => {
    setDescription(e.target.value)
  }

  return (
    <form className="form">
      <div className="form-title">
        <label className="form-title__label" for="title">
          Title:
          <input type="text" onChange={onChangeTitle} value={title} className="form-title__input" id="title" name="title" placeholder="Type claim title" />
        </label>
      </div>
      <div className="form-type">
        <label className="form-type__label" for="type">
          Type:
          <div className="select">
          <select className="form-type__select" id="type" onChange={onChangeType} value={type}>
            <option value="">Select type</option>
            <option value="Hardware">Hardware</option>
            <option value="Software">Software</option>
            <option value="Troubleshooting">Troubleshooting</option>
            <option value="Networking">Networking</option>
          </select>
          <img src={IconArrowDown} alt="" />
          </div>
        </label>
      </div>
      <div className="form-description">
        <label className="form-description__label" for="text">
          Description:
          <textarea className="form-description__textarea" onChange={onChangeDescription} value={description} id="text" name="text" placeholder="Type claim description" width="100%" height="48px" />
        </label>
      </div>
    </form>
  )
}
