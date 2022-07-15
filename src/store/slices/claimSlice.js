import {createSlice} from "@reduxjs/toolkit";
import moment from "moment";
import { v4 as uuidv4 } from 'uuid';

export const claimSlice = createSlice({
	name: "claim",
	initialState: {
		claims: [
			{
				id: "1",
				title: "Figma smart web system for to build",
				create: "12/04/2021",
				type: "Hardware",
				status: "declined",
				description: "dagadfga",
			},
			{
				id: "2",
				title: "Figma smart web system for to build",
				create: "12/04/2021",
				type: "Software",
				status: "new",
				description: "zl,fl,sdl;f",
			},
			{
				id: "3",
				title: "Figma smart web system for to build",
				create: "12/04/2021",
				type: "Networking",
				status: "in progress",
				description: "ASFas,gal,df",
			},
		],
	},

	reducers: {
		createClaim(state, action) {
      console.log(state)
      console.log(action)

			state.claims.push({
        id: uuidv4(),
				title: action.payload.title,
				create: moment().utc().format("DD/MM/YYYY"),
				type: action.payload.type,
        status: "",
				description: action.payload.description,
			});
		},
	},
});


export const {createClaim} = claimSlice.actions;

export default claimSlice.reducer;
