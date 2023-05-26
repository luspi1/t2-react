import React, { type FC, useState } from 'react'

import styles from './index.module.scss'
import mainStyles from 'src/modules/LoginModal/index.module.scss'
import { MainInput } from 'src/UI/MainInput/MainInput'

import { ErrorWarning } from 'src/UI/ErrorWarning'
import { Controller, type SubmitHandler, useForm } from 'react-hook-form'
import { type RegForm } from 'src/modules/LoginModal/components/RegModal/types'
import { RegController } from 'src/modules/LoginModal/components/RegModal/components/RegController'
import { MainTextarea } from 'src/UI/MainTextarea'
import { Button } from 'src/UI/Button'
import { LockIconSvg } from 'src/UI/icons/LockIconSVG'

export const RegModal: FC = () => {
	const [regStep, setRegStep] = useState<number>(1)

	const { handleSubmit, control, trigger } = useForm<RegForm>({ mode: 'onBlur' })

	const onSubmit: SubmitHandler<RegForm> = (data) => {
		setRegStep(6)
		console.log(data)
	}

	const decrementStep = () => {
		setRegStep(regStep - 1)
	}
	const incrementStep = async () => {
		const result = await trigger()
		if (result) {
			setRegStep(regStep + 1)
		}
	}

	if (regStep === 6) {
		return (
			<div className={styles.successStep}>
				<h1>ВАША ЗАЯВКА УСПЕШНО ЗАРЕГИСТРИРОВАНА</h1>
				<p>Пожалуйста, введите код, отправленный на указанный Вами номер телефона:</p>
				<form action=''>
					<MainInput
						svg={<LockIconSvg />}
						name='phoneCode'
						type='password'
						width='130px'
						margin='0 auto'
					/>
					<Button type='submit' background='#66ACCC' width='230px'>
						Войти на сайт
					</Button>
				</form>
			</div>
		)
	}

	return (
		<div className={styles.regModal}>
			<h1>САМОСТОЯТЕЛЬНАЯ РЕГИСТРАЦИЯ</h1>
			<p>нового пользователя</p>
			<ErrorWarning errorText='Пожалуйста, заполните все поля' />
			<form onSubmit={handleSubmit(onSubmit)}>
				{regStep === 1 && (
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
						<div className={styles.borderLine}></div>
						<div className={styles.inputGroup}>
							<label>Дата рождения*</label>
							<Controller
								name='dataBirth'
								control={control}
								rules={{
									required: 'Введите дату рождения',
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
							<label>Место рождения*</label>
							<Controller
								name='placeOfBirth_RU'
								control={control}
								rules={{
									required: 'Введите место рождения',
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
						<div className={styles.borderLine}></div>
						<div className={styles.inputGroup}>
							<label>ИНН*</label>
							<Controller
								name='inn'
								control={control}
								rules={{
									required: 'Введите ИНН',
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
				)}
				{regStep === 2 && (
					<div className={styles.formStep}>
						<div className={styles.inputGroup}>
							<label>Серия и номер паспорта*</label>
							<Controller
								name='seriesAndNumber'
								control={control}
								rules={{
									required: 'Введите Серию и номер паспорта',
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
							<label>Орган, выдавший паспорт*</label>
							<Controller
								name='issuedBy_RU'
								control={control}
								rules={{
									required: 'Введите орган',
								}}
								render={({ field: { onChange, onBlur, value, ref }, fieldState: { error } }) => (
									<>
										<MainTextarea
											onChange={onChange}
											onBlur={onBlur}
											inputRef={ref}
											value={value || ''}
										/>
										<ErrorWarning errorText={error?.message} />
									</>
								)}
							/>
						</div>
						<div className={styles.inputGroup}>
							<label>Дата выдачи*</label>
							<Controller
								name='dateOfIssue'
								control={control}
								rules={{
									required: 'Введите дату выдачи',
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
							<label>Дата окончания срока действия*</label>
							<Controller
								name='validity'
								control={control}
								rules={{
									required: 'Введите дату окончания срока действия*',
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
							<label>Адрес регистрации*</label>
							<Controller
								name='placeOfPermanentReg_RU'
								control={control}
								rules={{
									required: 'Введите адрес регистрации',
								}}
								render={({ field: { onChange, onBlur, value, ref }, fieldState: { error } }) => (
									<>
										<MainTextarea
											onChange={onChange}
											onBlur={onBlur}
											inputRef={ref}
											value={value || ''}
										/>
										<ErrorWarning errorText={error?.message} />
									</>
								)}
							/>
						</div>
					</div>
				)}
				{regStep === 3 && (
					<div className={styles.formStep}>
						<div className={styles.inputGroup}>
							<p>Банковские реквизиты</p>
							<label>Номер счета*</label>
							<Controller
								name='bankAccounts.accountNumber'
								control={control}
								rules={{
									required: 'Введите номер счета',
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
							<label>МФО*</label>
							<Controller
								name='bankAccounts.bankMFO'
								control={control}
								rules={{
									required: 'Введите МФО',
								}}
								render={({ field: { onChange, onBlur, value, ref }, fieldState: { error } }) => (
									<>
										<MainTextarea
											onChange={onChange}
											onBlur={onBlur}
											inputRef={ref}
											value={value || ''}
										/>
										<ErrorWarning errorText={error?.message} />
									</>
								)}
							/>
						</div>
						<div className={styles.inputGroup}>
							<label>Наименование банка*</label>
							<Controller
								name='bankAccounts.bankName_RU'
								control={control}
								rules={{
									required: 'Введите наименование банка',
								}}
								render={({ field: { onChange, onBlur, value, ref }, fieldState: { error } }) => (
									<>
										<MainTextarea
											onChange={onChange}
											onBlur={onBlur}
											inputRef={ref}
											value={value || ''}
										/>
										<ErrorWarning errorText={error?.message} />
									</>
								)}
							/>
						</div>
						<div className={styles.inputGroup}>
							<label>Получатель*</label>
							<Controller
								name='bankAccounts.checkingAccount'
								control={control}
								rules={{
									required: 'Введите получателя',
								}}
								render={({ field: { onChange, onBlur, value, ref }, fieldState: { error } }) => (
									<>
										<MainTextarea
											onChange={onChange}
											onBlur={onBlur}
											inputRef={ref}
											value={value || ''}
										/>
										<ErrorWarning errorText={error?.message} />
									</>
								)}
							/>
						</div>
						<div className={styles.inputGroup}>
							<label>Дата окончания срока действия*</label>
							<Controller
								name='bankAccounts.bankDateEnded'
								control={control}
								rules={{
									required: 'Введите дату окончания срока действия',
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
							<label>Дата добавления счета**</label>
							<Controller
								name='bankAccounts.bankDateAdded'
								control={control}
								rules={{
									required: 'Введите дату добавления счета',
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
				)}
				{regStep === 4 && (
					<div className={styles.formStep}>
						<div className={styles.inputGroup}>
							<label>Приложите сканы документа*</label>
							{/* <Controller */}
							{/*	name='documents.scanFiles' */}
							{/*	control={control} */}
							{/*	render={({ field: { value, ref }, fieldState: { error } }) => ( */}
							{/*		<Dropzone ref={ref} onDrop={(acceptedFiles) => (value = acceptedFiles)}> */}
							{/*			{({ getRootProps, getInputProps }) => ( */}
							{/*				<section> */}
							{/*					<div {...getRootProps()}> */}
							{/*						<input {...getInputProps()} /> */}
							{/*						<p>Перетяните изображение в это поле или</p> */}
							{/*						<p>Загрузите файл</p> */}
							{/*					</div> */}
							{/*				</section> */}
							{/*			)} */}
							{/*		</Dropzone> */}
							{/*	)} */}
							{/* /> */}
						</div>

						<span className={mainStyles.or}>или</span>
						<div className={styles.inputGroup}>
							<label>Добавьте ссылку на изображение*</label>
							<Controller
								name='documents.scans'
								control={control}
								rules={{
									required: 'Добавьте ссылку или сканы',
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
							<label>Дополнительные сведения о себе*</label>
							<Controller
								name='documents.description'
								control={control}
								rules={{
									required: 'Дополнительные сведения о себе*',
								}}
								render={({ field: { onChange, onBlur, value, ref }, fieldState: { error } }) => (
									<>
										<MainTextarea
											onChange={onChange}
											onBlur={onBlur}
											inputRef={ref}
											value={value || ''}
										/>
										<ErrorWarning errorText={error?.message} />
									</>
								)}
							/>
						</div>
					</div>
				)}

				{regStep <= 4 && (
					<RegController
						step={regStep}
						handleIncrementStep={incrementStep}
						handleDecrementStep={decrementStep}
					/>
				)}

				{regStep === 5 && (
					<div className={styles.formStep}>
						<div className={styles.inputGroup}>
							<label>Введите номер мобильного телефона*</label>
							<Controller
								name='mobileNumber'
								control={control}
								rules={{
									required: 'Введите номер',
								}}
								render={({ field: { onChange, onBlur, value, ref }, fieldState: { error } }) => (
									<>
										<MainInput
											className={mainStyles.borderBottom}
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
							<label>Введите адрес электронной почты*</label>
							<Controller
								name='email'
								control={control}
								rules={{
									required: 'Введите e-mail',
								}}
								render={({ field: { onChange, onBlur, value, ref }, fieldState: { error } }) => (
									<>
										<MainInput
											onChange={onChange}
											onBlur={onBlur}
											inputRef={ref}
											value={value || ''}
											type='email'
										/>
										<ErrorWarning errorText={error?.message} />
									</>
								)}
							/>
						</div>
						<div className={styles.inputGroup}>
							<label>Создайте пароль для входа в систему*</label>
							<Controller
								name='password'
								control={control}
								rules={{
									required: 'Введите пароль',
								}}
								render={({ field: { onChange, onBlur, value, ref }, fieldState: { error } }) => (
									<>
										<MainInput
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
						</div>
						<div className={styles.inputGroup}>
							<label>Введите пароль повторно*</label>
							<Controller
								name='passwordRepeat'
								control={control}
								rules={{
									required: 'Введите пароль повторно',
								}}
								render={({ field: { onChange, onBlur, value, ref }, fieldState: { error } }) => (
									<>
										<MainInput
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
						</div>
						<Button type='submit' background='#66ACCC' width='80%'>
							подать заявку
						</Button>
					</div>
				)}
			</form>
		</div>
	)
}
