import TextInput from "../inputs/TextInput";
import TournamentSticker from "../inputs/TournamentSticker";
import ChooseStickerType from "../inputs/ChooseStickerType";
import AddSticker from "../Buttons/AddSticker";

function CSStickerForm(props) {
	return (
		<form className=" flex h-4/5 flex-col justify-evenly">
			<TextInput name="Sticker Name" />
			<TournamentSticker />
			<ChooseStickerType />
			<AddSticker />
		</form>
	);
}

export default CSStickerForm;
