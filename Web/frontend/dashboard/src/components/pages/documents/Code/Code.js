

const Code = ({code = "", children, inline = false}) => {
	return (
		<>
			<code style={{
				width: "100%",
				textAlign: "left",
				direction: "ltr",
				display: inline ? "inline" : "block",
				whiteSpace: "pre-wrap",
				marginBottom: "10px",
				background: "#000",
				padding: "3px 5px"
			}}>
				{code || children}
			</code>
		</>
	);
};

export default Code;