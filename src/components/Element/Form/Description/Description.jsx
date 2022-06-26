import React from "react";

import "../Form.scss"

export const Description = ({ value, onChangeDescription }) => {
  return (
    <div className="form-description">
      <label className="form-description__label" htmlFor="text">
        Description:
        <textarea
          value={value}
          onChange={onChangeDescription}
          className="form-description__textarea"
          id="text"
          name="text"
          placeholder="Type claim description"
          width="100%"
          height="48px" />
      </label>
    </div>
  )
}