import { useState } from "react";
import TextInput from "../inputs/TextInput";
import SelectGunType from "../inputs/SelectGunType";
import GunConditions from "../inputs/GunConditions";
import StatTrak from "../inputs/StatTrak";
import AddGun from "../Buttons/AddGun";

function CSGunForm(props) {
	const [gunType, setGunType] = useState("AK-47");
	const [gunName, setGunName] = useState("");
	const [isStatTrak, setisStattrak] = useState(false);
	const [gunCondition, setGunCondition] = useState({
		"Factory New": false,
		"Minimal Wear": false,
		"Field-Tested": false,
		"Well-Worn": false,
		"Battle-Scarred": false,
	});

	function GunFormHandler(event) {
		event.preventDefault();

		const conditions = [];

		for (let key in gunCondition) {
			if (gunCondition[key]) {
				conditions.push(key);
			}
		}

		const newData = {
			Name: `${gunName}`,
			ST: isStatTrak,
			Type: gunType,
			Conditions: [...conditions],
		};

		console.log(newData);
		props.setSummaryList(() => {
			const newList = [...props.summaryList];
			newList.push(newData);

			return newList;
		});
	}

	return (
		<form
			onSubmit={GunFormHandler}
			className=" flex h-4/5 flex-col justify-evenly"
		>
			<SelectGunType setGun={setGunType} />
			<TextInput name="Gun Name" setName={setGunName} />
			<GunConditions
				gunConditions={gunCondition}
				gunConditionsList={setGunCondition}
			/>
			<StatTrak statTrak={isStatTrak} setStattrak={setisStattrak} />
			<AddGun />
		</form>
	);
}

export default CSGunForm;
