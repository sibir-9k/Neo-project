import React from "react";

import "./Form.scss"

export const Form = () => {
  return (
    <form>
      <label>
        Title:
        <input type="text" name="name" placeholder="Type claim title" />
      </label>
      <br />
      <label>
        Type:
        <select>
          <option value="Hardware">Hardware</option>
          <option value="Software">Software</option>
          <option value="Troubleshooting">Troubleshooting</option>
          <option value="Networking">Networking</option>
        </select>
      </label>
      <br />
      <label>
        Description:
        <textarea placeholder="Type claim description"/>
      </label>
    </form>
  )
}
