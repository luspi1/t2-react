import { type FC } from 'react'
import { Button } from 'src/UI/Button'
import { LangSwitch } from 'src/components/LangSwitch/LangSwitch'
import { MainInput } from 'src/UI/MainInput/MainInput'
import { MailIconSvg } from 'src/UI/icons/MailIconSVG'
import { PhoneIconSvg } from 'src/UI/icons/PhoneIconSVG'
import { LockIconSvg } from 'src/UI/icons/LockIconSVG'

import styles from 'src/modules/LoginModal/components/AuthModal/index.module.scss'
import mainStyles from 'src/modules/LoginModal/index.module.scss'
import { useAppDispatch } from 'src/hooks/store'
import { setModalState } from 'src/modules/LoginModal/store/login-slice/login.slice'
import { ModalStates } from 'src/pages/LoginPage/consts'
import cn from 'classnames'

export const AuthModal: FC = () => {
	const dispatch = useAppDispatch()
	return (
		<div className={styles.authModal}>
			<LangSwitch className={mainStyles.loginLangSwitch} />
			<h1>АВТОРИЗАЦИЯ</h1>

			<form className={mainStyles.borderBottom} action='#'>
				<p className={mainStyles.inputDesc}>Номер мобильного телефона*</p>
				<MainInput
					svg={<PhoneIconSvg />}
					type='phone'
					name='userPhone'
					placeholder='+ 7 888 999 0022'
				/>
				<span className={mainStyles.or}>или</span>

				<p className={mainStyles.inputDesc}>Адрес электронной почты*</p>
				<MainInput
					svg={<MailIconSvg />}
					type='email'
					name='userEmail'
					placeholder='+ 7 888 999 0022'
				/>
				<p className={mainStyles.inputDesc}>Пароль*</p>
				<MainInput svg={<LockIconSvg />} type='password' name='userPassword' />
				<Button background='#ffffff' color='#337390' width='130px' margin='0 auto' type='submit'>
					Войти
				</Button>
			</form>
			<p className={mainStyles.textCenter}>
				Если Вы прошли регистрацию через портал ЕСИА, Вам нужно войти через другую форму.
			</p>
			<Button
				background='#66ACCC'
				width='241px'
				margin='0 auto 30px'
				onClick={() => dispatch(setModalState(ModalStates.Esia))}
			>
				войти через ЕСИА
			</Button>
			<p className={cn(mainStyles.textCenter, mainStyles.borderTop)}>
				Если у Вас нет учетной записи, пройдите, пожалуйста, регистрацию.
			</p>
			<Button
				background='#66ACCC'
				margin='0 auto'
				onClick={() => dispatch(setModalState(ModalStates.Esia))}
			>
				зарегистрироваться
			</Button>
		</div>
	)
}
