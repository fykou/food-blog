// components/Directions.tsx
type Props = {
	directions: string[]
}

const Directions: React.FC<Props> = ({ directions }: Props) => {
	return (
		<>
			<h2 className='mt-8'>Directions</h2>
			<ol role='list' className='list-decimal'>
				{directions.map((direction, index) => (
					<li key={index}>{direction}</li>
				))}
			</ol>
		</>
	)
}

export default Directions
