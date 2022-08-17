import "./App.css";
import { Route } from "react-router-dom";
import Home from "./Pages/Home";
import LinkGenerator from "./Pages/LinkGenerator";
import ItemsComparison from "./Pages/ItemsComparison";
import Navbar from "./Components/Navbar/Navbar";

function App() {
	return (
		<div>
			<Navbar />
			<main>
				<Route path="/" exact>
					<Home />
				</Route>

				<Route path="/link-generator">
					<LinkGenerator />
				</Route>

				<Route path="/Items-Comparison">
					<ItemsComparison />
				</Route>
			</main>
		</div>
	);
}

export default App;
