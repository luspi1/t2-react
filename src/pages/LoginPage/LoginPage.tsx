import { type FC } from 'react'
import { Helmet } from 'react-helmet-async'
import { Container } from 'src/UI/Container'
import { LoginModal } from 'src/modules/LoginModal/LoginModal'

export const LoginPage: FC = () => {
	return (
		<Container className='index-page' margin='0 auto 35px auto'>
			<Helmet>
				<title>Авторизация</title>
			</Helmet>
			<LoginModal />
		</Container>
	)
}
