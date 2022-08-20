function LinkGeneratorMain(props) {
	return (
		<div className="grid h-[93vh] w-full grid-cols-12 grid-rows-6 bg-slate-700">
			{props.children}
		</div>
	);
}

export default LinkGeneratorMain;
