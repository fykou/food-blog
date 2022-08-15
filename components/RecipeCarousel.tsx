import React from 'react'

type Props = {
	children: React.ReactNode
	pageTitle?: string
}

export const RecipeCarousel: React.FC<Props> = ({ children }: Props) => {
	const [currentImage, setCurrentImage] = React.useState(0)

	return (
		<>
			<div className='flex flex-wrap mt-16 justify-center'>{children}</div>
		</>
	)
}
