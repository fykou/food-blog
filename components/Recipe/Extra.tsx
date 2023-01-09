type Props = {
	extra?: string[]
}

const Extra: React.FC<Props> = ({ extra }: Props) => {
	return (
		<>
			<h2>Tips</h2>
			<ul className='p-0 m-0'>
				{extra?.map((tip, index) => (
					<li key={index}>{tip}</li>
				))}
			</ul>
		</>
	)
}

export default Extra
