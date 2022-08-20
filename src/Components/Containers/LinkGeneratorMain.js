function LinkGeneratorMain(props) {
	return (
		<div className="container grid h-[92vh] w-full grid-cols-12 grid-rows-12 bg-slate-700">
			{props.children}
		</div>
	);
}

export default LinkGeneratorMain;
