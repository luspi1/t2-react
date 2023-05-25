import React, { type FC } from 'react'

import { LangSwitch } from 'src/components/LangSwitch/LangSwitch'

import styles from './index.module.scss'
import mainStyles from 'src/modules/LoginModal/index.module.scss'
import { MainInput } from 'src/UI/MainInput/MainInput'
import { ErrorWarning } from 'src/UI/ErrorWarning'
import { Controller, type SubmitHandler, useForm } from 'react-hook-form'
import { type RegForm } from 'src/modules/LoginModal/components/RegModal/types'

export const RegModal: FC = () => {
	const { handleSubmit, control } = useForm<RegForm>({ mode: 'onBlur' })

	const onSubmit: SubmitHandler<RegForm> = (data) => {
		console.log(data)
	}

	return (
		<div className={styles.regModal}>
			<LangSwitch className={mainStyles.loginLangSwitch} />
			<h1>САМОСТОЯТЕЛЬНАЯ РЕГИСТРАЦИЯ</h1>
			<p>нового пользователя</p>
			<ErrorWarning errorText='Пожалуйста, заполните все поля' />
			<form onSubmit={handleSubmit(onSubmit)}>
				<div className={styles.formStep}>
					<div className={styles.inputGroup}>
						<label>Фамилия*</label>
						<Controller
							name='secondName_RU'
							control={control}
							rules={{
								required: 'Введите фамилию',
							}}
							render={({ field: { onChange, onBlur, value, ref }, fieldState: { error } }) => (
								<>
									<MainInput
										onChange={onChange}
										onBlur={onBlur}
										inputRef={ref}
										value={value || ''}
										type='text'
									/>
									<ErrorWarning errorText={error?.message} />
								</>
							)}
						/>
					</div>
					<div className={styles.inputGroup}>
						<label>Имя*</label>
						<Controller
							name='name_RU'
							control={control}
							rules={{
								required: 'Введите имя',
							}}
							render={({ field: { onChange, onBlur, value, ref }, fieldState: { error } }) => (
								<>
									<MainInput
										onChange={onChange}
										onBlur={onBlur}
										inputRef={ref}
										value={value || ''}
										type='text'
									/>
									<ErrorWarning errorText={error?.message} />
								</>
							)}
						/>
					</div>
					<div className={styles.inputGroup}>
						<label>Отчество*</label>
						<Controller
							name='patronymicName_RU'
							control={control}
							rules={{
								required: 'Введите отчество',
							}}
							render={({ field: { onChange, onBlur, value, ref }, fieldState: { error } }) => (
								<>
									<MainInput
										onChange={onChange}
										onBlur={onBlur}
										inputRef={ref}
										value={value || ''}
										type='text'
									/>
									<ErrorWarning errorText={error?.message} />
								</>
							)}
						/>
					</div>
				</div>
			</form>
		</div>
	)
}
