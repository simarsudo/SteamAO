function GunConditions(props) {
	const divClasses = "flex items-center";
	const checkboxClasses = "w-5 h-5";
	const spanClasses = "w-1/2 ml-2";

	return (
		<div className="flex h-7">
			<span className="flex w-1/3 items-center">Condition/s</span>
			<div className="flex w-2/3 items-center justify-between">
				<div className={divClasses}>
					<input
						className={checkboxClasses}
						type="checkbox"
						id="FN"
						name="FN"
						value="true"
					/>
					<span className={spanClasses}>FN</span>
				</div>
				<div className={divClasses}>
					<input
						className={checkboxClasses}
						type="checkbox"
						id="MW"
						name="MW"
						value="true"
					/>
					<span className={spanClasses}>MW</span>
				</div>
				<div className={divClasses}>
					<input
						className={checkboxClasses}
						type="checkbox"
						id="FT"
						name="FT"
						value="true"
					/>
					<span className={spanClasses}>FT</span>
				</div>
				<div className={divClasses}>
					<input
						className={checkboxClasses}
						type="checkbox"
						id="WW"
						name="WW"
						value="true"
					/>
					<span className={spanClasses}>WW</span>
				</div>
				<div className={divClasses}>
					<input
						className={checkboxClasses}
						type="checkbox"
						id="BS"
						name="BS"
						value="true"
					/>
					<span className={spanClasses}>BS</span>
				</div>
			</div>
		</div>
	);
}

export default GunConditions;
