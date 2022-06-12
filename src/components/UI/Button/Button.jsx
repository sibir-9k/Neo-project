import React from "react";

import { IconPlus } from "../../../assets/img/index.js"
import "./Button.scss"
import { Link } from "react-router-dom";

export const Button = () => {
  return (
    <Link to="create">
      <button>
        <img src={IconPlus} alt="" />
        Create claim
      </button>
    </Link>
  )
}