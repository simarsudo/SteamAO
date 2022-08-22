function Tr(props) {
	const baseLink = "https://steamcommunity.com/market/listings/730/";
	const stickerLink =
		"https://steamcommunity.com/market/listings/730/Sticker |";
	const trClasses = "flex h-10 border-b-2 border-indigo-400";
	const td1Classes = "flex w-2/5 items-center justify-center";
	const td2Classes = "flex w-1/5 items-center justify-center";
	const aClasses = "text-indigo-500 underline";

	if (props.CSItemType === "Gun") {
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
			<tr className={trClasses}>
				<td className={td1Classes}>{`${Name} ${
					isSt === true ? "StatTrak™ " : ""
				}`}</td>
				<td className={td2Classes}>{Type}</td>
				<td className={`${td1Classes} justify-evenly`}>
					{ConditionsList.map((condition) => {
						return (
							<a
								className={aClasses}
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
	} else if (props.CSItemType === "Sticker") {
		const grades = {
			Lenticular: "Le",
			Gold: "Go",
			Holo: "Ho",
			Glitter: "Gl",
			Foil: "Fo",
			Paper: "Pa",
		};

		const isTS = props.itemIsTS;
		const TournamentName = props.itemTournamentName;
		const Name = props.itemName;
		const Type = props.CSItemType;
		const GradeList = props.itemGrade;

		return (
			<tr className={trClasses}>
				<td className="flex w-2/5 items-center justify-center">{`${Name} ${
					isTS === true ? `${TournamentName} ` : ""
				}`}</td>
				<td className={td2Classes}>{Type}</td>
				<td className={`${td1Classes} justify-evenly`}>
					{GradeList.map((condition) => {
						return (
							<a
								className={aClasses}
								target="_blank"
								rel="noopener noreferrer"
								href={encodeURI(
									`${stickerLink} ${
										condition === "Paper" ? `${Name}` : `${Name} (${condition})`
									} ${isTS === true ? `| ${TournamentName}` : ""}`
								)
									.replace("(", "%28")
									.replace(")", "%29")}
							>
								{grades[condition]}
							</a>
						);
					})}
				</td>
			</tr>
		);
	}
}

export default Tr;
