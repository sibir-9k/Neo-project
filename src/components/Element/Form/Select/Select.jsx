import React from "react";

import "../Form.scss"
import { IconArrowDown } from "../../../../assets/img/index"

export const Select = ({ option, onChangeType, value }) => {
  return (
    <div className="form-type">
      <label className="form-type__label" htmlFor="type">
        Type:
        <div className="select">
          <select className="form-type__select" id="type" value={value} onChange={onChangeType}>
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