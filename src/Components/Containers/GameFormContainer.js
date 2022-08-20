import SummaryContainer from "../Containers/SummaryContainer";

// Container for all game forms

function GameFormContainer(props) {
	return (
		<div className="row-end-11 container col-start-3 col-end-12 row-start-2 row-end-[12] flex flex-row justify-evenly rounded-lg bg-white p-4">
			{props.gameForm}
			<SummaryContainer />
		</div>
	);
}

export default GameFormContainer;
