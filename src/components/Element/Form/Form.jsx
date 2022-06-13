import React from "react";

import "./Form.scss"
import "../../UI/Button/Button"
export const Form = () => {

  // const [formGroup, setFormGroup] = useState([
  //   { id: 1, title: 'title', type: 'type', desription: '' }
  // ])

  return (
    <form className="form">
      <div className="form-title">
        <label className="form-title__label">
          Title:
          <input type="text" className="form-title__input" name="name" placeholder="Type claim title" />
        </label>
      </div>
      <div className="form-type">
        <label className="form-type__label">
          Type:
          <select className="form-type__select">
            <option value="Hardware">Hardware</option>
            <option value="Software">Software</option>
            <option value="Troubleshooting">Troubleshooting</option>
            <option value="Networking">Networking</option>
          </select>
        </label>
      </div>
      <div className="form-description">
        <label className="form-description__label">
          Description:
          <br />
          <textarea  className="form-description__textarea" placeholder="Type claim description" width="100%" height="48px"/>
        </label>
      </div>

      <button className="form-cansel__btn">Cansel</button>
      <button className="form-create__btn">
        Create
      </button>
    </form>
  )
}
