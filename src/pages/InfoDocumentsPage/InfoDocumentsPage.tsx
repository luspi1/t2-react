import { Container } from '../../UI/Container'
import { MainTitle } from '../../UI/MainTitle'
import { type FC } from 'react'
import { Helmet } from 'react-helmet-async'

export const InfoDocumentsPage: FC = () => {
	return (
		<Container margin='0 auto 35px auto'>
			<Helmet>
				<title>Информация и документы</title>
			</Helmet>
			<MainTitle padding='38px 0 32px 20px'>Информация и документы</MainTitle>
		</Container>
	)
}
