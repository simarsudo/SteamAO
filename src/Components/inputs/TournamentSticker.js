import { useState } from "react";

function TournamentSticker(props) {
	let [isChecked, setIsChecked] = useState(false);
	console.log(isChecked);

	function changeInputState() {
		if (isChecked === false) {
			return setIsChecked(true);
		}
		setIsChecked(false);
	}

	return (
		<div className="flex items-center">
			<span className="w-2/6">Tournament Sticker?</span>
			<div className="w-1/6">
				<input
					onChange={changeInputState}
					type="checkbox"
					id="isTournament"
					name="FN"
					value="true"
				/>
			</div>
			<input
				className="w-3/6"
				type="text"
				id="tournamentName"
				name="tournament"
				required
				disabled={!isChecked}
				placeholder="Antwerp 2022"
			/>
		</div>
	);
}
export default TournamentSticker;
