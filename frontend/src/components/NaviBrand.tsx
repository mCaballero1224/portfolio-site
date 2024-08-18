export default function NaviBrand() {
	return (
		<div
			style={{
				display: 'flex',
				flexFlow: 'row nowrap',
				alignItems: 'center',
			}}
		>
			<img
				src="https://placehold.co/50x50"
				className="d-inline-block"
			/>
			<p
				style={{
					margin: 0,
					paddingLeft: 10,
					fontFamily: 'monospace'
				}}
			>Michael's Terminal</p>
		</div>
	);
}
