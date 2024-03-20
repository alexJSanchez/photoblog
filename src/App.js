import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Pricing from "./pages/Pricing";
import Stories from "./pages/Stories";
import Features from "./pages/Features";
import Navigation from "./pages/Navigation";
import Footer from "./pages/Footer";
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
