import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";

import {dataBase} from "../../../api/api";
import {RowTable} from "./RowTable/RowTable";
import {useMobile} from "../../../hooks/useMobile/useMobile";
import {Card} from "../Card/Card";
import {allClaims} from "../../../store/slices/claimSlice";
import "./Table.scss";

const MobileTable = (props) => {
	return props.rowClaim.map((item, index) => {
		return <Card key={item['_id']} item={item} />;
	});
};
const DesktopTable = (props) => {
	return (
		<table>
			<tbody>
				<tr className="table-header">
					<th className="table-header__title">Title</th>
					<th className="table-header__title">Created</th>
					<th className="table-header__title">Type</th>
					<th className="table-header__title">Status</th>
					<th className="table-header__title">Actions</th>
				</tr>
			</tbody>

			{props.rowClaim.map((item, index) => {
				return <RowTable key={item['_id']} item={item} />;

			})}
		</table>
	);
};

export const Table = () => {
	const dispatch = useDispatch();
	const {page} = useSelector((state) => state.claim);

	useEffect(() => {
		dataBase()
			.get(`/claim?offset=${(page - 1) * 10}&limit=10`)
			.then((responce) => {
				dispatch(allClaims(responce.data));
			});
	}, [page]);

	const rowClaim = useSelector((state) => state.claim.claims);
	const {isMobile} = useMobile();

	return <div>{isMobile ? <MobileTable rowClaim={rowClaim} /> : <DesktopTable rowClaim={rowClaim} />}</div>;
};
