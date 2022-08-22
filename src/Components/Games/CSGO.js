import SelectTypeCS from "../inputs/SelectTypeCS";
import CSGunForm from "../Forms/CSGunForm";
import CSStickerForm from "../Forms/CSStickerForm";

function CSGO(props) {
	const itemType = props.itemType;
	const setItemType = props.setItemType;

	let renderForm = (
		<CSGunForm
			setSummaryList={props.setSummaryList}
			summaryList={props.summaryList}
		/>
	);

	if (itemType === "Sticker") {
		renderForm = (
			<CSStickerForm
				setSummaryList={props.setSummaryList}
				summaryList={props.summaryList}
			/>
		);
	}

	return (
		<div className="w-1/2 rounded bg-slate-200 p-4">
			<h2 className="flex h-[5%] items-center justify-center text-2xl font-semibold italic tracking-wider text-indigo-500">
				CSGO
			</h2>
			<SelectTypeCS settype={setItemType} />
			{renderForm}
		</div>
	);
}

export default CSGO;
