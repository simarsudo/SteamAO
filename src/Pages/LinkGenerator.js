import { useState } from "react";
import LinkGeneratorMain from "../Components/Containers/LinkGeneratorMain";
import Sidebar from "../Components/Navbar/Sidebar";
import CSGO from "../Components/Games/CSGO";
import TF2 from "../Components/Games/TF2";

function LinkGenerator(props) {
	document.title = "Link Generator";

	let [currentGame, setCurrentGame] = useState("CSGO");

	let renderGameComponent = <CSGO />;

	if (currentGame === "TF2") {
		renderGameComponent = <TF2 />;
	}

	return (
		<LinkGeneratorMain>
			<Sidebar activeGame={currentGame} changeGame={setCurrentGame} />
			{renderGameComponent}
		</LinkGeneratorMain>
	);
}

export default LinkGenerator;
