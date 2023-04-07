import { type FC, type PropsWithChildren } from 'react'
import styled, { css } from 'styled-components'

type AucStatusProps = PropsWithChildren<{
	green?: boolean
	gray?: boolean
}>

const StyledAucStatus = styled.div<AucStatusProps>`
	width: 190px;
	height: 38px;
	margin-right: 0;
	margin-left: auto;
	align-self: center;
	border-radius: 50px;
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 14px;
	line-height: 17px;
	background: #ceeadf;
	color: #1dab7f;
	${(props) =>
		props.green &&
		css`
			background: #ceeadf;
			color: #1dab7f;
		`};
	${(props) =>
		props.gray &&
		css`
			background: #dfe4ea;
			color: #337390;
			font-weight: 700;
		`};
`
export const AucStatus: FC<AucStatusProps> = (props) => {
	return <StyledAucStatus {...props} />
}
