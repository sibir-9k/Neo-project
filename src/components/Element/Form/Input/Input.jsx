import React from "react";

import "../Form.scss"

export const Input = ({ value, onChangeTitle }) => {
  return (
    <div className="form-title">
      <label className="form-title__label" htmlFor="title">
        Title:
        <input
          value={value} onChange={onChangeTitle}
          className="form-title__input"
          id="title"
          name="title"
          placeholder="Type claim title"
        />
      </label>
    </div>
  )
}