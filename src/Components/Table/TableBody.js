import Tr from "./Tr";

function TableBody(props) {
	if (props.items.length === 0) {
		return (
			<tbody className="flex h-10 items-center justify-center">
				<h1 className="text-xl font-semibold text-indigo-500">No Items</h1>
			</tbody>
		);
	}

	return (
		<tbody className="w-full">
			{props.items.map((item, index) => (
				<Tr
					key={index}
					CSItemType={item["ItemType"]}
					itemName={item["Name"]}
					itemType={item["Type"]}
					itemGrade={item["Grade"]}
					itemST={item["ST"]}
					itemIsTS={item["isTS"]}
					itemTournamentName={item["TournamentName"]}
				></Tr>
			))}
		</tbody>
	);
}

export default TableBody;
