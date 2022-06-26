import {combineReducers} from "redux";
import {listReducer} from "./listReduser.js";

export const rootReducer = combineReducers({
	list: listReducer,
});
