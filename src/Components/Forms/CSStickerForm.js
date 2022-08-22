import { useState } from "react";
import TextInput from "../inputs/TextInput";
import TournamentSticker from "../inputs/TournamentSticker";
import ChooseStickerType from "../inputs/ChooseStickerType";
import AddSticker from "../Buttons/AddSticker";

function CSStickerForm(props) {
	const [stickerName, setStickerName] = useState("");
	const [isTS, setIsTS] = useState(false);
	const [Tname, setTName] = useState("");
	const [stickerTypes, setStickerTypes] = useState({
		Lenticular: false,
		Gold: false,
		Holo: false,
		Glitter: false,
		Foil: false,
		Paper: false,
	});

	function stickerFormHandler(event) {
		event.preventDefault();

		const grade = [];

		for (let key in stickerTypes) {
			if (stickerTypes[key]) {
				grade.push(key);
			}
		}

		const newData = {
			ItemType: "Sticker",
			Name: stickerName,
			isTS: isTS,
			TournamentName: Tname,
			Grade: grade,
		};

		props.setSummaryList(() => {
			const newList = [...props.summaryList];
			newList.push(newData);

			return newList;
		});
	}

	return (
		<form
			onSubmit={stickerFormHandler}
			className=" flex h-4/5 flex-col justify-evenly"
		>
			<TextInput name="Sticker Name" setName={setStickerName} />

			<TournamentSticker
				Tname={Tname}
				isTS={isTS}
				setIsTS={setIsTS}
				setTname={setTName}
			/>
			<ChooseStickerType
				stickerTypes={stickerTypes}
				setStickerTypes={setStickerTypes}
			/>
			<AddSticker />
		</form>
	);
}

export default CSStickerForm;
