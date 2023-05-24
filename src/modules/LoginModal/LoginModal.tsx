import { Modal } from 'src/UI/Modal/Modal'
import { type FC } from 'react'
import { ModalStates } from 'src/pages/LoginPage/consts'
import { MainAuthModal } from 'src/modules/LoginModal/components/MainAuthModal/MainAuthModal'
import { EsiaLoginModal } from 'src/modules/LoginModal/components/EsiaLoginModal/EsiaLoginModal'
import { useAppSelector } from 'src/hooks/store'
import { NameSpace } from 'src/helpers/consts'
import styles from './index.module.scss'
import { AuthModal } from 'src/modules/LoginModal/components/AuthModal/AuthModal'
import { RegModal } from 'src/modules/LoginModal/components/RegModal/RegModal'

const renderModalState = (state: ModalStates) => {
	switch (state) {
		case ModalStates.Main:
			return <MainAuthModal />
		case ModalStates.Esia:
			return <EsiaLoginModal />
		case ModalStates.Login:
			return <AuthModal />
		case ModalStates.Reg:
			return <RegModal />
		default:
			return <MainAuthModal />
	}
}
export const LoginModal: FC = () => {
	const modalState = useAppSelector((state) => state[NameSpace.Login].modalState)

	return (
		<Modal className={styles.loginModal} active={true}>
			{renderModalState(modalState)}
		</Modal>
	)
}
