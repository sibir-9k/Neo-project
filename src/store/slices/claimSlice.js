import {createSlice} from "@reduxjs/toolkit";
import moment from "moment";
import {v4 as uuidv4} from "uuid";

const initialState = {
	claims: [],
  page: 1,
  totalItems: 0,
  type: {
    name: null,
    slug: null,
  }
};
export const claimSlice = createSlice({
	name: "claim",
	initialState,
	reducers: {
		createClaim(state, action) {
			state.claims.push({
				id: uuidv4(),
				title: action.payload.title,
				create: moment().utc().format("DD/MM/YYYY"),
				type: action.payload.type,
				status: action.payload.status,
				description: action.payload.description,
        
			});
		},

    allClaims(state, action){
      state.claims = action.payload.claims;
      state.totalItems = action.payload.totalItems;
    },

    changePage: (state, action) => {
			state.page = action.payload;
		},

    setClaims(state, action){
      let {title, type, description} = action.payload;
      type = type.slug;
      state.claims = {title, type, description}
    }
	},
});

export const {createClaim, allClaims, changePage, setClaims} = claimSlice.actions;

export default claimSlice.reducer;
