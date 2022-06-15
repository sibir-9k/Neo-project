import React from "react";

import "./Form.scss"
import "../../UI/Button/Button.scss"
export const Form = () => {


  return (
    <form className="form">
      <div className="form-title">
        <label className="form-title__label" for="title">
          Title:
          <input type="text" className="form-title__input" id="title" name="title" placeholder="Type claim title" disabled />
        </label>
      </div>
      <div className="form-type">
        <label className="form-type__label" for="type">
          Type:
          <select className="form-type__select" id="type">
            <option value="">Select type</option>
            <option value="Hardware">Hardware</option>
            <option value="Software">Software</option>
            <option value="Troubleshooting">Troubleshooting</option>
            <option value="Networking">Networking</option>
          </select>
        </label>
      </div>
      <div className="form-description">
        <label className="form-description__label" for="text">
          Description:
          <textarea className="form-description__textarea" id="text" name="text" placeholder="Type claim description" width="100%" height="48px" />
        </label>
      </div>
    </form>
  )
}
