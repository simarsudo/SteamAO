function Sidebar(props) {
	const activeClasses =
		"after:absolute after:w-[5%] after:h-full after:right-0 after:top-0 after:bg-yellow-500";

	const CSGOClasses = props.activeGame === "CSGO" ? activeClasses : "";
	function CurrentlyCSGO() {
		props.changeGame("CSGO");
	}

	const TF2Classes = props.activeGame === "TF2" ? activeClasses : "";
	function CurrentlyTF2() {
		props.changeGame("TF2");
	}

	return (
		<nav className="col-span-1 row-start-1 row-end-7 flex h-full w-1/2 flex-col items-center bg-slate-800 py-8">
			<ul className="text-l relative flex h-full w-full flex-col items-center justify-start text-white">
				<li
					onClick={CurrentlyCSGO}
					to="/link-generator/CSGO"
					exact
					className={
						"relative flex h-16 w-full cursor-pointer items-center justify-center " +
						CSGOClasses
					}
				>
					CSGO
				</li>
				<li
					onClick={CurrentlyTF2}
					to="/link-generator/TF2"
					exact
					className={
						"relative flex h-16 w-full cursor-pointer items-center justify-center " +
						TF2Classes
					}
				>
					TF2
				</li>
			</ul>
		</nav>
	);
}

export default Sidebar;
