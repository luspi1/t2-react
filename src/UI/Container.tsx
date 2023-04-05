import { type FC, type PropsWithChildren } from 'react'
import styled from 'styled-components'

type ContainerProps = PropsWithChildren<{
	padding?: string
}>

const StyledContainer = styled.div<ContainerProps>`
	margin: 0 auto;
	max-width: 1230px;
	padding: ${({ padding }) => padding ?? '0 15px'};
`
export const Container: FC<ContainerProps> = (props) => {
	return <StyledContainer {...props} />
}
