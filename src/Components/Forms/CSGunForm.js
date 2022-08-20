import TextInput from "../inputs/TextInput";
import SelectGunType from "../inputs/SelectGunType";
import GunConditions from "../inputs/GunConditions";
import StatTrak from "../inputs/StatTrak";
import AddGun from "../Buttons/AddGun";

function CSGunForm(props) {
	return (
		<form className=" flex h-4/5 flex-col justify-evenly">
			<SelectGunType />
			<TextInput name="Gun Name" />
			<GunConditions />
			<StatTrak />
			<AddGun />
		</form>
	);
}

export default CSGunForm;
