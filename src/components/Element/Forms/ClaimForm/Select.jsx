import React from "react";

import "./ClaimForm.scss"
import { IconArrowDown } from "../../../../assets/img/index"

export const Select = ({ onChangeType, value, label, className, onChangeValid, onBlur }) => {
  return (
    <div className="form-type">
      <label className="form-type__label">
        {label}:
        <div className="select">
          <select
            className={className}
            id="type"
            value={value}
            onChange={e => { onChangeType(e); onChangeValid(e) }}
            onBlur={onBlur}
          >
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
  )
}