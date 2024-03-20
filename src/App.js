import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Pricing from "./pages/Pricing";
import Stories from "./pages/Stories";
import Features from "./pages/Features";
import Navigation from "./pages/Navigation";
import Footer from "./pages/Footer";
import logo from "./assets/shared/desktop/logo.svg";

import arrow from "./assets/shared/desktop/arrow.svg";
import facebook from "./assets/shared/desktop/facebook.svg";
import youtube from "./assets/shared/desktop/youtube.svg";
import twitter from "./assets/shared/desktop/twitter.svg";
import pinterest from "./assets/shared/desktop/pinterest.svg";
import instagram from "./assets/shared/desktop/instagram.svg";

import "./App.css";
import "./index.css";

function App() {
	return (
		<BrowserRouter>
			<Navigation />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="pricing" element={<Pricing />} />
				<Route path="stories" element={<Stories />} />
				<Route path="features" element={<Features />} />
			</Routes>
			<Footer />
		</BrowserRouter>
	);
}

export default App;
