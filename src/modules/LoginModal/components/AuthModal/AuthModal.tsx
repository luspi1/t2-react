import React, { type FC } from 'react'
import { Controller, type SubmitHandler, useForm } from 'react-hook-form'
import { type AuthForm } from 'src/modules/LoginModal/components/AuthModal/types'

import { Button } from 'src/UI/Button'
import { ErrorWarning } from 'src/UI/ErrorWarning'

import { LangSwitch } from 'src/components/LangSwitch/LangSwitch'
import { MainInput } from 'src/UI/MainInput/MainInput'

import styles from 'src/modules/LoginModal/components/AuthModal/index.module.scss'
import mainStyles from 'src/modules/LoginModal/index.module.scss'
import cn from 'classnames'

import { useAppDispatch } from 'src/hooks/store'
import { setModalState } from 'src/modules/LoginModal/store/login-slice/login.slice'
import { ModalStates } from 'src/pages/LoginPage/consts'
import { PhoneIconSvg } from 'src/UI/icons/PhoneIconSVG'
import { MailIconSvg } from 'src/UI/icons/MailIconSVG'
import { LockIconSvg } from 'src/UI/icons/LockIconSVG'

export const AuthModal: FC = () => {
	const dispatch = useAppDispatch()

	const { handleSubmit, control, watch } = useForm<AuthForm>({ mode: 'onBlur' })

	const phoneLoginValues = watch('loginPhone')
	const loginValues = watch('login')
	const passwordValues = watch('password')
	const onSubmit: SubmitHandler<AuthForm> = (data) => {
		console.log(data)
	}

	return (
		<div className={styles.authModal}>
			<LangSwitch className={mainStyles.loginLangSwitch} />
			<h1>АВТОРИЗАЦИЯ</h1>

			<form className={mainStyles.borderBottom} onSubmit={handleSubmit(onSubmit)}>
				<p className={mainStyles.inputDesc}>Номер мобильного телефона*</p>

				<Controller
					name='loginPhone'
					control={control}
					rules={{
						required:
							!loginValues && !passwordValues ? 'Введите телефон или логин с паролем' : false,
					}}
					render={({ field: { onChange, onBlur, value, ref }, fieldState: { error } }) => (
						<>
							<MainInput
								svg={<PhoneIconSvg />}
								onChange={onChange}
								onBlur={onBlur}
								inputRef={ref}
								value={value || ''}
								type='phone'
								placeholder='+ 7 888 999 0022'
							/>
							<ErrorWarning errorText={error?.message} />
						</>
					)}
				/>

				<span className={mainStyles.or}>или</span>

				<p className={mainStyles.inputDesc}>Адрес электронной почты*</p>
				<Controller
					name='login'
					control={control}
					rules={{
						required: !phoneLoginValues ? 'Введите телефон или логин с' + ' паролем' : false,
					}}
					render={({ field: { onChange, onBlur, value, ref }, fieldState: { error } }) => (
						<>
							<MainInput
								svg={<MailIconSvg />}
								onChange={onChange}
								onBlur={onBlur}
								innerRef={ref}
								value={value}
								type='email'
								placeholder='konstantin@konstantin.com'
							/>
							<ErrorWarning errorText={error?.message} />
						</>
					)}
				/>
				<p className={mainStyles.inputDesc}>Пароль*</p>
				<Controller
					name='password'
					control={control}
					rules={{
						required: !phoneLoginValues ? 'Введите телефон или логин' + ' с паролем' : false,
					}}
					render={({ field: { onChange, onBlur, value, ref }, fieldState: { error } }) => (
						<>
							<MainInput
								svg={<LockIconSvg />}
								onChange={onChange}
								onBlur={onBlur}
								inputRef={ref}
								value={value || ''}
								type='password'
							/>
							<ErrorWarning errorText={error?.message} />
						</>
					)}
				/>
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
				onClick={() => dispatch(setModalState(ModalStates.Reg))}
			>
				зарегистрироваться
			</Button>
		</div>
	)
}
