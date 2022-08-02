import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import Eyes from "./pages/Eyes";
import Lips from "./pages/Lips";
import Face from "./pages/Face";
import Eyebrows from "./pages/Eyebrows";
import ProductPage from "./pages/ProductPage";

import axios from "axios";
import { useState, useEffect, useContext } from "react";
import { Routes, Route } from "react-router-dom";
import { MakeupContext } from "./context/makeupData.context";

function App() {
	const value = useContext(MakeupContext);

	return (
		<div className="App">
			<NavBar />
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/eyes" element={<Eyes />} />
				<Route path="/lips" element={<Lips />} />
				<Route path="/face" element={<Face />} />
				<Route path="/eyebrows" element={<Eyebrows />} />
				<Route path="/product/:id" element={<ProductPage />} />
			</Routes>
		</div>
	);
}

export default App;
