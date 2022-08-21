function Tr(props) {
	return (
		<tr className="flex h-10 border-b-2 border-indigo-400">
			<td className="flex w-2/5 items-center justify-center">
				{props.itemName}
			</td>
			<td className="flex w-1/5 items-center justify-center">
				{props.itemType}
			</td>
			<td className="flex w-2/5 items-center justify-center">
				{props.itemGrade}
			</td>
		</tr>
	);
}

export default Tr;
