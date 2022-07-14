import {combineReducers} from "redux";
import {listReducer} from "./listReduser.js";
// import { userReduser } from "./userReduser.js";

export const rootReducer = combineReducers({
	list: listReducer,
  // user: userReduser,
});
