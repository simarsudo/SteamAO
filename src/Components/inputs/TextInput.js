function TextInput(props) {
	return (
		<div className="flex items-center">
			<span className="w-1/3">{props.name}</span>
			<input
				className="w-2/3"
				type="text"
				id={props.name}
				name={props.name}
				placeholder="Names are case sensitive"
			/>
		</div>
	);
}

export default TextInput;
