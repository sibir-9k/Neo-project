import React from "react";

import "./App.scss";
import {ContentPages} from "./components/ContentPages/ContentPages";
import {Provider} from "react-redux";
import {createStore} from "redux";
import {rootReducer} from "./store/reduser/rootReduser";

const store = createStore(rootReducer);

export default function App() {
	return (
		<Provider store = {store}>
			<div className="App">
				<ContentPages />
			</div>
		</Provider>
	);
}
