function StatTrak(props) {
	function checkBoxHandler(event) {
		props.setStattrak(!props.statTrak);
	}

	return (
		<div className="flex items-center">
			<span className="w-1/3">StatTrak™</span>
			<input
				onChange={checkBoxHandler}
				type="checkbox"
				id="isSt"
				name="isSt"
				value="true"
			/>
		</div>
	);
}

export default StatTrak;
