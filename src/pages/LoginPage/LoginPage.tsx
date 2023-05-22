import { type FC } from 'react'
import { Helmet } from 'react-helmet-async'
import { Container } from 'src/UI/Container'
import { Modal } from 'src/UI/Modal/Modal'
import { MainAuthModal } from 'src/pages/LoginPage/components/MainAuthModal/MainAuthModal'

import styles from './index.module.scss'

export const LoginPage: FC = () => {
	return (
		<Container className='index-page' margin='0 auto 35px auto'>
			<Helmet>
				<title>Авторизация</title>
			</Helmet>
			<Modal className={styles.loginModal} active={true}>
				<MainAuthModal />
			</Modal>
		</Container>
	)
}
