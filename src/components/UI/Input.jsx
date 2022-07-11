import React from "react";

import "../Element/Forms/ClaimForm/ClaimForm.scss"
import { IconLock, IconMail, IconUser } from "../../assets/img/index.js"

export const Input = (
  { value,
    onChangeTitle,
    onChangeValid,
    onBlur,
    label,
    type,
    placeholder,
    name,
    className,
    labelClassName,
    wrapperLabel
  }) => {

  const classDivImg = (className) => {
    if (className === 'form-email__input') {
      return className = "form-email__img"
    } else if (className === "form-password__input") {
      return className = "form-password__img"
    } else if (className === "form-fullname__input") {
      return className = "form-fullname__img"
    }
  }

  const iconInput = (className) => {
    if (className === 'form-email__input') {
      return <img src={IconMail} alt=""/>
    } else if (className === "form-password__input") {
      return <img src={IconLock} alt=""/>
    } else if (className === "form-fullname__input") {
      return <img src={IconUser} alt=""/>
    }
  }

  return (
    <div className={wrapperLabel}>
      <label className={labelClassName}>
        {label}:
        <input
          value={value}
          onChange={e => { onChangeValid(e) ; onChangeTitle(e) }}
          onBlur={onBlur}
          className={className}
          name={name}
          placeholder={placeholder}
          type={type}
          required
        />
        <div className={classDivImg(className)}>{iconInput(className)}</div>
      </label>
    </div>
  )
}