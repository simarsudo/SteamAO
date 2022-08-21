import TableHeading from "../Table/TableHeading";
import TableBody from "../Table/TableBody";
// Container for Summary

function SummaryContainer(props) {
	return (
		<div className="container h-full w-1/2 overflow-y-scroll rounded bg-slate-200">
			<table className="w-full">
				<TableHeading></TableHeading>
				<TableBody items={props.items}></TableBody>
			</table>
		</div>
	);
}

export default SummaryContainer;
