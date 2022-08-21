import { type } from "@testing-library/user-event/dist/type";

function Tr(props) {
	const baseLink = "https://steamcommunity.com/market/listings/730/";

	const conditions = {
		"Factory New": "FN",
		"Minimal Wear": "MW",
		"Field-Tested": "FT",
		"Well-Worn": "WW",
		"Battle-Scarred": "BS",
	};

	const isSt = props.itemST;
	const Name = props.itemName;
	const Type = props.itemType;
	const ConditionsList = props.itemGrade;

	return (
		<tr className="flex h-10 border-b-2 border-indigo-400">
			<td className="flex w-2/5 items-center justify-center">{`${Name} ${
				isSt === true ? "StatTrak™ " : ""
			}`}</td>
			<td className="flex w-1/5 items-center justify-center">{Type}</td>
			<td className="flex w-2/5 items-center justify-evenly">
				{ConditionsList.map((condition) => {
					return (
						<a
							className="text-indigo-500 underline"
							target="_blank"
							rel="noopener noreferrer"
							href={encodeURI(
								`${baseLink}${
									isSt === true ? "StatTrak™ " : ""
								}${Type} | ${Name} (${condition})`
							)
								.replace("(", "%28")
								.replace(")", "%29")}
						>
							{conditions[condition]}
						</a>
					);
				})}
			</td>
		</tr>
	);
}

export default Tr;
