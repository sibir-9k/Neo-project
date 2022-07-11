import React from "react";

// import "./ClaimForm.scss"

export const Description = ({ value, onChangeDescription, label, onChangeValid, className,onBlur, placeholder }) => {
  return (
    <div className="form-description">
      <label className="form-description__label" htmlFor="text">
        {label}:
        <textarea
          value={value}
          onChange={(e) => {onChangeDescription(e); onChangeValid(e)}} 
          onBlur={onBlur}
          className={className}
          // id="text"
          // name="text"
          placeholder={placeholder}
          width="100%"
          height="48px" />
      </label>
    </div>
  )
}