import React from "react";

import "./ClaimForm.scss";
import {IconArrowDown} from "../../../../assets/img/index";

export const Select = ({onChangeType, value, label, className, onChangeValid, onBlur, options = [], disabled}) => {
	return (
		<div className="form-type">
			<label className="form-type__label">
				{label}:
				<div className="select">
					<select
						className={className}
						id="type"
						value={value}
						onChange={(e) => {
							onChangeType(e);
							onChangeValid(e);
						}}
						onBlur={onBlur}
            disabled={disabled}
					>
						<option value="">Select type</option>
						{options.map((item, key) => (
							<option key={item.slug} value={item.slug}>
								{item.name}
							</option>
						))}
					</select>
					<img src={IconArrowDown} alt="" />
				</div>
			</label>
		</div>
	);
};
