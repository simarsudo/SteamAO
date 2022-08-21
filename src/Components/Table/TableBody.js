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
					itemName={item["Name"]}
					itemType={item["Type"]}
					itemGrade={item["Conditions"]}
					itemST={item["ST"]}
				></Tr>
			))}
		</tbody>
	);
}

export default TableBody;
