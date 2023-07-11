import { type FC } from 'react'

type CheckIconSvgProps = {
	width: string
	height: string
}
export const CheckIconSvg: FC<CheckIconSvgProps> = ({ width, height }) => {
	return (
		<svg
			width={width}
			height={height}
			viewBox='0 0 17 12'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
		>
			<path
				d='M6.59999 12C6.29999 12 6.10004 11.9 5.90004 11.7L0.3 6.09999C-0.1 5.69999 -0.1 5.09999 0.3 4.69999C0.7 4.29999 1.30002 4.29999 1.70002 4.69999L6.59999 9.59999L15.3 0.899976C15.7 0.499976 16.3 0.499976 16.7 0.899976C17.1 1.29998 17.1 1.89997 16.7 2.29997L7.3 11.7C7.1 11.9 6.89999 12 6.59999 12Z'
				fill='#337390'
			/>
		</svg>
	)
}
