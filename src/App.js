import React from "react";

import "./App.scss";
// import {Header} from "./components/Element/Header/Header";
// import {NavBar} from "./components/Element/Navbar/Navbar";
import {ContentPages} from "./components/ContentPages/ContentPages";
import {Provider} from "react-redux";
import {createStore} from "redux";
import {rootReducer} from "./store/reduser/rootReduser";

const store = createStore(rootReducer);

export default function App() {
	return (
		<Provider store = {store}>
			<div className="App">
				{/* <Header />
				<NavBar /> */}
				<ContentPages />
			</div>
		</Provider>
	);
}
