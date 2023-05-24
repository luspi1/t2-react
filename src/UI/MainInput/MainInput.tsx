import { type FC, type HTMLInputTypeAttribute, type ReactNode, type RefCallback } from 'react'
import styled, { css } from 'styled-components'
import styles from './index.module.scss'

type MainInputProps = {
	type: HTMLInputTypeAttribute
	value?: string | number
	name?: string
	svg?: ReactNode
	inputRef?: RefCallback<string>
	placeholder?: string
	onInput?: () => void
	onChange?: () => void
	onBlur?: () => void
	className?: string
	padding?: string
	margin?: string
	width?: string
	color?: string
	fontSize?: string
	weight?: string
	lineHeight?: string
	background?: string
	radius?: string
	border?: string
	outline?: string
	disabledState?: boolean
}

const StyledMainInput = styled.input<MainInputProps>`
	font-family: 'Montserrat', sans-serif;
	line-height: ${({ lineHeight }) => lineHeight ?? '20px'};
	font-weight: ${({ weight }) => weight ?? '500'};
	font-size: ${({ fontSize }) => fontSize ?? '14px'};
	padding: ${({ padding }) => padding ?? '10px 10px 10px 20px'};
	margin: ${({ margin }) => margin ?? '0'};
	width: ${({ width }) => width ?? '100%'};
	color: ${({ color }) => color ?? '#3D3D3D;'};
	background-color: ${({ background }) => background ?? '#ffffff'};
	border-radius: ${({ radius }) => radius ?? '3px'};
	border: ${({ border }) => border ?? 'none'};
	outline: ${({ outline }) => outline ?? 'none'};

	${(props) =>
		props.disabledState &&
		css`
			opacity: 0.5;
			pointer-events: none;
		`};
`

export const MainInput: FC<MainInputProps> = (props) => {
	if (props.svg) {
		return (
			<div className={styles.mainInputWrapper}>
				{props.svg}
				<StyledMainInput {...props} />
			</div>
		)
	}

	return <StyledMainInput {...props} />
}
