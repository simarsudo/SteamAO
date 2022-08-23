function SelectTypeCS(props) {
	return (
		<div className="flex h-[15%] items-center">
			<span className="w-1/3">Type</span>
			<select
				onChange={(event) => {
					props.settype(event.target.value);
				}}
				className="h-10 w-2/3"
			>
				<option value="Gun">Gun</option>
				<option value="Sticker">Sticker</option>
			</select>
		</div>
	);
}

export default SelectTypeCS;
