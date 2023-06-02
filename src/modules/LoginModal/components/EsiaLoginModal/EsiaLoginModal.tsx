import React, { type FC } from 'react'
import { type FieldValues, type SubmitHandler, useForm } from 'react-hook-form'

import { Button } from 'src/UI/Button'
import { ControlledField } from 'src/UI/ControlledField/СontrolledField'
import { MailIconSvg } from 'src/UI/icons/MailIconSVG'
import mainStyles from '../../index.module.scss'

import styles from './index.module.scss'

export const EsiaLoginModal: FC = () => {
	const {
		handleSubmit,
		control,
		formState: { errors },
	} = useForm<FieldValues>({
		mode: 'onBlur',
		defaultValues: {
			userEmail: '',
		},
	})

	const onSubmit: SubmitHandler<FieldValues> = (data) => {
		console.log(data)
	}

	return (
		<div className={styles.esiaModal}>
			<h1>АВТОРИЗАЦИЯ ЧЕРЕЗ ЕСИА</h1>
			<form noValidate onSubmit={handleSubmit(onSubmit)}>
				<p className={mainStyles.inputDesc}>Учетная запись</p>
				<ControlledField
					placeholder='konstantin@konstantin.com'
					control={control}
					name='userEmail'
					type='email'
					svg={<MailIconSvg />}
					rules={{ required: 'Заполните поле email!' }}
					errors={errors}
				/>
				<p>
					При регистрации пользователя через ЕСИА, АИС свяжется с системой государственных услуг и
					опознает Вас автоматически в случае, если Вы зарегистрированы и верифицированы на портале
					государственных услуг.
				</p>
				<p>
					Вам не будет нужно вводить никакие данные пользователя. Изменить на нашем сайте Вы их тоже
					не сможете: все данные сайт получает из государственной базы данных.
				</p>
				<Button background='#ffffff' color='#337390' width='230px' margin='0 auto' type='submit'>
					авторизоваться
				</Button>
			</form>
		</div>
	)
}
