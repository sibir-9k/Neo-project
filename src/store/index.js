import {configureStore} from "@reduxjs/toolkit";
import userReduser from "./slices/userSlice.js";
import claimReduser from "./slices/claimSlice.js";

const store = configureStore({
	reducer: {
		user: userReduser,
		claim: claimReduser,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: false,
		}),
});

export default store;