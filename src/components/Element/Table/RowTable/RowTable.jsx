import React from "react";
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";

import {formatDate} from "../../../../functions/formatDate.js";
import {claimStatusColor} from "../../../../functions/claimStatusColor.js";
import {claimTypeColor} from "../../../../functions/claimTypeColor.js";
import "./RowTable.scss";

export const RowTable = ({item}) => {
	const role = useSelector((state) => state.user.user.role);
	const {status, title, _id, createdAt, type} = item;

	return (
		<>
			<tbody className="table-string">
				<tr>
					<td className="table-string__title">{title}</td>
					<td className="table-string__create">{formatDate(createdAt)}</td>
					<td className="table-type">
						{type && (
							<>
								<div className="table-type__circle" style={claimTypeColor(type.name)}></div>
								{type.name}
							</>
						)}
					</td>
					<td>
						{status && (
							<div className="table-btn__statys" style={claimStatusColor(status.slug)}>
								{status.name}
							</div>
						)}
					</td>
					<td className="">{role.slug === "admin" && <Link to={`incoming/${_id}`}>Browse</Link>}</td>
				</tr>
			</tbody>
		</>
	);
};
