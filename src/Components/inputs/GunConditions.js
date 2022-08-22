function GunConditions(props) {
	const divClasses = "flex items-center";
	const spanClasses = "w-1/2";

	function checkboxHandler(event) {
		props.setgunConditionsList(() => {
			const gCondition = { ...props.gunConditions };
			gCondition[event.target.name] = event.target.checked;
			return { ...gCondition };
		});
	}

	return (
		<div className="flex h-7">
			<span className="flex w-1/3 items-center">Condition/s</span>
			<div className="flex w-2/3 items-center justify-between">
				<div className={divClasses}>
					<input
						onChange={checkboxHandler}
						type="checkbox"
						id="FN"
						name="Factory New"
						value="true"
					/>
					<span className={spanClasses}>FN</span>
				</div>

				<div className={divClasses}>
					<input
						onChange={checkboxHandler}
						type="checkbox"
						id="MW"
						name="Minimal Wear"
						value="true"
					/>
					<span className={spanClasses}>MW</span>
				</div>

				<div className={divClasses}>
					<input
						onChange={checkboxHandler}
						type="checkbox"
						id="FT"
						name="Field-Tested"
						value="true"
					/>
					<span className={spanClasses}>FT</span>
				</div>

				<div className={divClasses}>
					<input
						onChange={checkboxHandler}
						type="checkbox"
						id="WW"
						name="Well-Worn"
						value="true"
					/>
					<span className={spanClasses}>WW</span>
				</div>

				<div className={divClasses}>
					<input
						onChange={checkboxHandler}
						type="checkbox"
						id="BS"
						name="Battle-Scarred"
						value="true"
					/>
					<span className={spanClasses}>BS</span>
				</div>
			</div>
		</div>
	);
}

export default GunConditions;
