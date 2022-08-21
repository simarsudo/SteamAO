import { useState } from "react";
import LinkGeneratorMain from "../Components/Containers/LinkGeneratorMain";
import Sidebar from "../Components/Navbar/Sidebar";
import GameFormContainer from "../Components/Containers/GameFormContainer";

// link-generator page main render

function LinkGenerator(props) {
	document.title = "Link Generator";

	let [currentGame, setCurrentGame] = useState("CSGO");

	return (
		<LinkGeneratorMain>
			<Sidebar activeGame={currentGame} changeGame={setCurrentGame} />
			<GameFormContainer currentGame={currentGame} />
		</LinkGeneratorMain>
	);
}

export default LinkGenerator;
