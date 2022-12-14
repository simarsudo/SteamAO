import { useState } from "react";
import CSGO from "../Games/CSGO";
import TF2 from "../Games/TF2";
import SummaryContainer from "../Containers/SummaryContainer";

// Container for all game forms

const InitialData = [];

function GameFormContainer(props) {
	const [summaryList, setSummaryList] = useState(InitialData);
	const [itemType, setItemType] = useState("Gun");

	let renderGameForm = (
		<CSGO
			itemType={itemType}
			setItemType={setItemType}
			setSummaryList={setSummaryList}
			summaryList={summaryList}
		/>
	);

	if (props.currentGame === "TF2") {
		renderGameForm = (
			<TF2 setSummaryList={setSummaryList} summaryList={summaryList} />
		);
	}

	return (
		<div className="row-end-11 container col-start-3 col-end-12 row-start-2 row-end-[12] flex flex-row justify-evenly gap-8 rounded-lg bg-white p-4">
			{renderGameForm}
			<SummaryContainer CSItemType={itemType} items={summaryList} />
		</div>
	);
}

export default GameFormContainer;
