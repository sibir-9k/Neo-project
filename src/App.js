import React from "react";

import "./App.scss";
import {BrowserRouter} from "react-router-dom";
import {Header} from "./components/Element/Header/Header";
import {NavBar} from "./components/Element/Navbar/Navbar";
import {ContentPages} from "./components/ContentPages/ContentPages";

export default function App() {
	return (
		<BrowserRouter>
			<div className="App">
				<Header />
				<NavBar />
				<ContentPages />
			</div>
		</BrowserRouter>
	);
}
