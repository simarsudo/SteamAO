function TableHeading(props) {
	return (
		<thead>
			<tr className="flex h-10 justify-center rounded-tl rounded-tr border-2 border-indigo-400">
				<th className="flex w-2/5 items-center justify-center font-semibold">
					Name
				</th>
				<th className="flex w-1/5 items-center justify-center font-semibold">
					Type
				</th>
				<th className="flex w-2/5 items-center justify-center font-semibold">
					Conditions/Grade
				</th>
			</tr>
		</thead>
	);
}

export default TableHeading;
