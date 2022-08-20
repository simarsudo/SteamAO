function SelectTypeCS(props) {
	function gunType() {
		return props.settype("Gun");
	}

	function stickerType() {
		return props.settype("Sticker");
	}

	return (
		<div className="flex h-[15%] items-center">
			<span className="w-1/3">Type</span>
			<select className="h-10 w-2/3">
				<option onClick={gunType} value="Gun">
					Gun
				</option>
				<option onClick={stickerType} value="Sticker">
					Sticker
				</option>
			</select>
		</div>
	);
}

export default SelectTypeCS;
