import { useState } from "react";
import SelectTypeCS from "../inputs/SelectTypeCS";
import CSGunForm from "../Forms/CSGunForm";
import CSStickerForm from "../Forms/CSStickerForm";

function CSGO(props) {
	let [itemType, setItemType] = useState("Gun");

	let renderForm = <CSGunForm />;

	if (itemType === "Sticker") {
		renderForm = <CSStickerForm />;
	}

	return (
		<div className="w-1/2 bg-slate-200 p-4">
			<SelectTypeCS settype={setItemType} />
			{renderForm}
		</div>
	);
}

export default CSGO;
