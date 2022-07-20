import React from "react";
import { useSelector } from "react-redux";

import { formatDate } from "../../../functions/formatDate";
import { claimTypeColor } from "../../../functions/claimTypeColor.js";
import { claimStatusColor } from "../../../functions/claimStatusColor.js";
import "./Card.scss";
import { Button } from "../../UI/Button/Button";

export const Card = ({ item }) => {
  const role = useSelector((state) => state.user.user.role);
  const { status, title, _id, createdAt, type } = item;

  return (
    <div className="mobile-container">
      <div className="mobile-card">
        <div className="mobile-card__title">{title}</div>
        <div className="mobile-card__body card-body">
          <div className="card-body__created">
            <b>Created</b>
            <div>{formatDate(createdAt)}</div>
          </div>
          <div className="card-body__type">
            <b>Type</b>
            {type && (
              <div className="type-block">
                <div className="table-type__circle" style={claimTypeColor(type.name)}></div>
                {type.name}
              </div>
            )}
          </div>

          <div className="card-body__status">
            <b>Status</b>
            {status && (<div style={claimStatusColor(status.slug)}>{status.slug}</div>)}
          </div>
          <div>{role.slug === "admin" && <Button type="browse" className="link-card" value="Browse" id={_id} />}</div>
        </div>
      </div>
    </div>
  );
};
