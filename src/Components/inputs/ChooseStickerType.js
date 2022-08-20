function ChooseStickerType(props) {
	const checkBoxClasses = "flex items-center justify-evenly";

	return (
		<div className="flex">
			<span className="w-1/3">Grade</span>
			<div className="flex flex-col items-baseline">
				<div className={checkBoxClasses}>
					<input
						type="checkbox"
						id="Lenticular"
						name="Lenticular"
						value="true"
					/>
					<span>Lenticular</span>
				</div>
				<div className={checkBoxClasses}>
					<input type="checkbox" id="Gold" name="Gold" value="true" />
					<span>Gold</span>
				</div>
				<div className={checkBoxClasses}>
					<input type="checkbox" id="Holo" name="Holo" value="true" />
					<span>Holo</span>
				</div>
				<div className={checkBoxClasses}>
					<input type="checkbox" id="Glitter" name="Glitter" value="true" />
					<span>Glitter</span>
				</div>
				<div className={checkBoxClasses}>
					<input type="checkbox" id="Foil" name="Foil" value="true" />
					<span>Foil</span>
				</div>
				<div className={checkBoxClasses}>
					<input type="checkbox" id="Paper" name="Paper" value="true" />
					<span>Paper</span>
				</div>
			</div>
		</div>
	);
}

export default ChooseStickerType;
