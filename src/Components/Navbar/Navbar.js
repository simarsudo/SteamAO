import { NavLink } from "react-router-dom";

function Navbar(props) {
	return (
		<nav className="h-[7vh] w-screen bg-slate-800">
			<ul className="flex h-full flex-row">
				<li className="h-full px-4 text-lg text-white">
					<NavLink className="flex h-full items-center justify-center " to="/">
						SteamAO
					</NavLink>
				</li>

				<li className="relative h-full px-4 text-lg text-white">
					<NavLink
						activeClassName="after:absolute after:w-full after:h-[10%] after:bottom-0 after:left-0 after:bg-lime-500 text-lime-400"
						className="flex h-full items-center justify-center "
						to="/link-generator"
					>
						Link Generator
					</NavLink>
				</li>

				<li className="relative h-full px-4 text-lg text-white">
					<NavLink
						activeClassName="after:absolute after:w-full after:h-[10%] after:bottom-0 after:left-0 after:bg-lime-500 text-lime-400"
						className="flex h-full items-center justify-center "
						to="/items-comparison"
					>
						Items Comparison
					</NavLink>
				</li>
			</ul>
		</nav>
	);
}

export default Navbar;
