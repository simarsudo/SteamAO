import "./App.css";
import { Route, Switch } from "react-router-dom";
import Home from "./Pages/Home";
import LinkGenerator from "./Pages/LinkGenerator";
import ItemsComparison from "./Pages/ItemsComparison";
import Navbar from "./Components/Navbar/Navbar";

function App() {
	return (
		<div>
			<Navbar />
			<main>
				<Switch>
					<Route path="/" exact>
						<Home />
					</Route>

					<Route path="/link-generator" exact>
						<LinkGenerator />
					</Route>

					<Route path="/Items-Comparison">
						<ItemsComparison />
					</Route>
				</Switch>
			</main>
		</div>
	);
}

export default App;
