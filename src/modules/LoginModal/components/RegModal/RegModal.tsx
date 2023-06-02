import { yupResolver } from '@hookform/resolvers/yup'
import cn from 'classnames'
import React, { type FC, useState } from 'react'
import { type FieldValues, type SubmitHandler, useForm } from 'react-hook-form'
import { positiveNumber } from 'src/helpers/masks'
import { RegController } from 'src/modules/LoginModal/components/RegModal/components/RegController'
import { regSchema } from 'src/modules/LoginModal/components/RegModal/schema'
import mainStyles from 'src/modules/LoginModal/index.module.scss'
import { Button } from 'src/UI/Button'
import { ControlledField } from 'src/UI/ControlledField/СontrolledField'

import { ErrorWarning } from 'src/UI/ErrorWarning'
import { FileInput } from 'src/UI/FileInput/FileInput'

import { LockIconSvg } from 'src/UI/icons/LockIconSVG'

import styles from './index.module.scss'

export const RegModal: FC = () => {
	const [regStep, setRegStep] = useState<number>(1)

	const {
		handleSubmit,
		control,
		trigger,
		formState: { errors },
	} = useForm<FieldValues>({
		mode: 'onBlur',
		resolver: yupResolver(regSchema),
	})

	const onSubmit: SubmitHandler<FieldValues> = (data) => {
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
				<form noValidate>
					<ControlledField
						control={control}
						name='phoneCode'
						type='password'
						svg={<LockIconSvg />}
						errors={errors}
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
			<form onSubmit={handleSubmit(onSubmit)} noValidate>
				{regStep === 1 && (
					<div className={styles.formStep}>
						<div className={styles.inputGroup}>
							<label>Фамилия*</label>
							<ControlledField control={control} name='secondName_RU' type='text' errors={errors} />
						</div>
						<div className={styles.inputGroup}>
							<label>Имя*</label>
							<ControlledField control={control} name='name_RU' type='text' errors={errors} />
						</div>
						<div className={styles.inputGroup}>
							<label>Отчество*</label>
							<ControlledField
								control={control}
								name='patronymicName_RU'
								type='text'
								errors={errors}
							/>
						</div>
						<div className={styles.borderLine}></div>
						<div className={styles.inputGroup}>
							<label>Дата рождения*</label>
							<ControlledField control={control} name='dataBirth' type='date' errors={errors} />
						</div>
						<div className={styles.inputGroup}>
							<label>Место рождения*</label>
							<ControlledField
								control={control}
								name='placeOfBirth_RU'
								type='text'
								errors={errors}
							/>
						</div>
						<div className={styles.borderLine}></div>
						<div className={styles.inputGroup}>
							<label>ИНН*</label>
							<ControlledField
								control={control}
								mask={positiveNumber}
								name='inn'
								type='text'
								errors={errors}
							/>
						</div>
					</div>
				)}
				{regStep === 2 && (
					<div className={styles.formStep}>
						<div className={styles.inputGroup}>
							<label>Серия и номер паспорта*</label>
							{/* <Controller */}
							{/*	name='seriesAndNumber' */}
							{/*	control={control} */}
							{/*	rules={{ */}
							{/*		required: 'Введите Серию и номер паспорта', */}
							{/*	}} */}
							{/*	render={({ field: { onChange, onBlur, value, ref }, fieldState: { error } }) => ( */}
							{/*		<> */}
							{/*			<MainInput */}
							{/*				onChange={onChange} */}
							{/*				onBlur={onBlur} */}
							{/*				innerRef={ref} */}
							{/*				value={value || ''} */}
							{/*				type='text' */}
							{/*			/> */}
							{/*			<ErrorWarning errorText={error?.message} /> */}
							{/*		</> */}
							{/*	)} */}
							{/* /> */}
						</div>
						<div className={styles.inputGroup}>
							<label>Орган, выдавший паспорт*</label>
							{/* <Controller */}
							{/*	name='issuedBy_RU' */}
							{/*	control={control} */}
							{/*	rules={{ */}
							{/*		required: 'Введите орган', */}
							{/*	}} */}
							{/*	render={({ field: { onChange, onBlur, value, ref }, fieldState: { error } }) => ( */}
							{/*		<> */}
							{/*			<MainTextarea */}
							{/*				onChange={onChange} */}
							{/*				onBlur={onBlur} */}
							{/*				inputRef={ref} */}
							{/*				value={value || ''} */}
							{/*			/> */}
							{/*			<ErrorWarning errorText={error?.message} /> */}
							{/*		</> */}
							{/*	)} */}
							{/* /> */}
						</div>
						<div className={styles.inputGroup}>
							<label>Дата выдачи*</label>
							{/* <Controller */}
							{/*	name='dateOfIssue' */}
							{/*	control={control} */}
							{/*	rules={{ */}
							{/*		required: 'Введите дату выдачи', */}
							{/*	}} */}
							{/*	render={({ field: { onChange, onBlur, value, ref }, fieldState: { error } }) => ( */}
							{/*		<> */}
							{/*			<MainInput */}
							{/*				onChange={onChange} */}
							{/*				onBlur={onBlur} */}
							{/*				innerRef={ref} */}
							{/*				value={value || ''} */}
							{/*				type='text' */}
							{/*			/> */}
							{/*			<ErrorWarning errorText={error?.message} /> */}
							{/*		</> */}
							{/*	)} */}
							{/* /> */}
						</div>
						<div className={styles.inputGroup}>
							<label>Дата окончания срока действия*</label>
							{/* <Controller */}
							{/*	name='validity' */}
							{/*	control={control} */}
							{/*	rules={{ */}
							{/*		required: 'Введите дату окончания срока действия*', */}
							{/*	}} */}
							{/*	render={({ field: { onChange, onBlur, value, ref }, fieldState: { error } }) => ( */}
							{/*		<> */}
							{/*			<MainInput */}
							{/*				onChange={onChange} */}
							{/*				onBlur={onBlur} */}
							{/*				innerRef={ref} */}
							{/*				value={value || ''} */}
							{/*				type='text' */}
							{/*			/> */}
							{/*			<ErrorWarning errorText={error?.message} /> */}
							{/*		</> */}
							{/*	)} */}
							{/* /> */}
						</div>
						<div className={styles.inputGroup}>
							<label>Адрес регистрации*</label>
							{/* <Controller */}
							{/*	name='placeOfPermanentReg_RU' */}
							{/*	control={control} */}
							{/*	rules={{ */}
							{/*		required: 'Введите адрес регистрации', */}
							{/*	}} */}
							{/*	render={({ field: { onChange, onBlur, value, ref }, fieldState: { error } }) => ( */}
							{/*		<> */}
							{/*			<MainTextarea */}
							{/*				onChange={onChange} */}
							{/*				onBlur={onBlur} */}
							{/*				inputRef={ref} */}
							{/*				value={value || ''} */}
							{/*			/> */}
							{/*			<ErrorWarning errorText={error?.message} /> */}
							{/*		</> */}
							{/*	)} */}
							{/* /> */}
						</div>
					</div>
				)}
				{regStep === 3 && (
					<div className={styles.formStep}>
						<div className={styles.inputGroup}>
							<p>Банковские реквизиты</p>
							<label>Номер счета*</label>
							{/* <Controller */}
							{/*	name='bankAccounts.accountNumber' */}
							{/*	control={control} */}
							{/*	rules={{ */}
							{/*		required: 'Введите номер счета', */}
							{/*	}} */}
							{/*	render={({ field: { onChange, onBlur, value, ref }, fieldState: { error } }) => ( */}
							{/*		<> */}
							{/*			<MainInput */}
							{/*				onChange={onChange} */}
							{/*				onBlur={onBlur} */}
							{/*				innerRef={ref} */}
							{/*				value={value || ''} */}
							{/*				type='text' */}
							{/*			/> */}
							{/*			<ErrorWarning errorText={error?.message} /> */}
							{/*		</> */}
							{/*	)} */}
							{/* /> */}
						</div>
						<div className={styles.inputGroup}>
							<label>МФО*</label>
							{/* <Controller */}
							{/*	name='bankAccounts.bankMFO' */}
							{/*	control={control} */}
							{/*	rules={{ */}
							{/*		required: 'Введите МФО', */}
							{/*	}} */}
							{/*	render={({ field: { onChange, onBlur, value, ref }, fieldState: { error } }) => ( */}
							{/*		<> */}
							{/*			<MainTextarea */}
							{/*				onChange={onChange} */}
							{/*				onBlur={onBlur} */}
							{/*				inputRef={ref} */}
							{/*				value={value || ''} */}
							{/*			/> */}
							{/*			<ErrorWarning errorText={error?.message} /> */}
							{/*		</> */}
							{/*	)} */}
							{/* /> */}
						</div>
						<div className={styles.inputGroup}>
							<label>Наименование банка*</label>
							{/* <Controller */}
							{/*	name='bankAccounts.bankName_RU' */}
							{/*	control={control} */}
							{/*	rules={{ */}
							{/*		required: 'Введите наименование банка', */}
							{/*	}} */}
							{/*	render={({ field: { onChange, onBlur, value, ref }, fieldState: { error } }) => ( */}
							{/*		<> */}
							{/*			<MainTextarea */}
							{/*				onChange={onChange} */}
							{/*				onBlur={onBlur} */}
							{/*				inputRef={ref} */}
							{/*				value={value || ''} */}
							{/*			/> */}
							{/*			<ErrorWarning errorText={error?.message} /> */}
							{/*		</> */}
							{/*	)} */}
							{/* /> */}
						</div>
						<div className={styles.inputGroup}>
							<label>Получатель*</label>
							{/* <Controller */}
							{/*	name='bankAccounts.checkingAccount' */}
							{/*	control={control} */}
							{/*	rules={{ */}
							{/*		required: 'Введите получателя', */}
							{/*	}} */}
							{/*	render={({ field: { onChange, onBlur, value, ref }, fieldState: { error } }) => ( */}
							{/*		<> */}
							{/*			<MainTextarea */}
							{/*				onChange={onChange} */}
							{/*				onBlur={onBlur} */}
							{/*				inputRef={ref} */}
							{/*				value={value || ''} */}
							{/*			/> */}
							{/*			<ErrorWarning errorText={error?.message} /> */}
							{/*		</> */}
							{/*	)} */}
							{/* /> */}
						</div>
						<div className={styles.inputGroup}>
							<label>Дата окончания срока действия*</label>
							{/* <Controller */}
							{/*	name='bankAccounts.bankDateEnded' */}
							{/*	control={control} */}
							{/*	rules={{ */}
							{/*		required: 'Введите дату окончания срока действия', */}
							{/*	}} */}
							{/*	render={({ field: { onChange, onBlur, value, ref }, fieldState: { error } }) => ( */}
							{/*		<> */}
							{/*			<MainInput */}
							{/*				onChange={onChange} */}
							{/*				onBlur={onBlur} */}
							{/*				innerRef={ref} */}
							{/*				value={value || ''} */}
							{/*				type='text' */}
							{/*			/> */}
							{/*			<ErrorWarning errorText={error?.message} /> */}
							{/*		</> */}
							{/*	)} */}
							{/* /> */}
						</div>
						<div className={styles.inputGroup}>
							<label>Дата добавления счета**</label>
							{/* <Controller */}
							{/*	name='bankAccounts.bankDateAdded' */}
							{/*	control={control} */}
							{/*	rules={{ */}
							{/*		required: 'Введите дату добавления счета', */}
							{/*	}} */}
							{/*	render={({ field: { onChange, onBlur, value, ref }, fieldState: { error } }) => ( */}
							{/*		<> */}
							{/*			<MainInput */}
							{/*				onChange={onChange} */}
							{/*				onBlur={onBlur} */}
							{/*				innerRef={ref} */}
							{/*				value={value || ''} */}
							{/*				type='text' */}
							{/*			/> */}
							{/*			<ErrorWarning errorText={error?.message} /> */}
							{/*		</> */}
							{/*	)} */}
							{/* /> */}
						</div>
					</div>
				)}
				{regStep === 4 && (
					<div className={styles.formStep}>
						<div className={styles.inputGroup}>
							<label>Приложите сканы документа*</label>

							<FileInput control={control} name='documents.scanFiles' />
						</div>

						<span className={mainStyles.or}>или</span>
						<div className={styles.inputGroup}>
							<label>Добавьте ссылку на изображение*</label>
							{/* <Controller */}
							{/*	name='documents.scans' */}
							{/*	control={control} */}
							{/*	rules={{ */}
							{/*		required: 'Добавьте ссылку или сканы', */}
							{/*	}} */}
							{/*	render={({ field: { onChange, onBlur, value, ref }, fieldState: { error } }) => ( */}
							{/*		<> */}
							{/*			<MainInput */}
							{/*				onChange={onChange} */}
							{/*				onBlur={onBlur} */}
							{/*				innerRef={ref} */}
							{/*				value={value || ''} */}
							{/*				type='text' */}
							{/*			/> */}
							{/*			<ErrorWarning errorText={error?.message} /> */}
							{/*		</> */}
							{/*	)} */}
							{/* /> */}
						</div>
						<div className={styles.inputGroup}>
							<label>Дополнительные сведения о себе*</label>
							{/* <Controller */}
							{/*	name='documents.description' */}
							{/*	control={control} */}
							{/*	rules={{ */}
							{/*		required: 'Дополнительные сведения о себе*', */}
							{/*	}} */}
							{/*	render={({ field: { onChange, onBlur, value, ref }, fieldState: { error } }) => ( */}
							{/*		<> */}
							{/*			<MainTextarea */}
							{/*				onChange={onChange} */}
							{/*				onBlur={onBlur} */}
							{/*				inputRef={ref} */}
							{/*				value={value || ''} */}
							{/*			/> */}
							{/*			<ErrorWarning errorText={error?.message} /> */}
							{/*		</> */}
							{/*	)} */}
							{/* /> */}
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
						<div className={cn(styles.inputGroup, styles.borderBottom)}>
							<label>Введите номер мобильного телефона*</label>
							{/* <Controller */}
							{/*	name='mobileNumber' */}
							{/*	control={control} */}
							{/*	rules={{ */}
							{/*		required: 'Введите номер', */}
							{/*	}} */}
							{/*	render={({ field: { onChange, onBlur, value, ref }, fieldState: { error } }) => ( */}
							{/*		<> */}
							{/*			<MainInput */}
							{/*				onChange={onChange} */}
							{/*				onBlur={onBlur} */}
							{/*				innerRef={ref} */}
							{/*				value={value || ''} */}
							{/*				type='text' */}
							{/*			/> */}
							{/*			<ErrorWarning errorText={error?.message} /> */}
							{/*		</> */}
							{/*	)} */}
							{/* /> */}
						</div>
						<div className={styles.inputGroup}>
							<label>Введите адрес электронной почты*</label>
							{/* <Controller */}
							{/*	name='email' */}
							{/*	control={control} */}
							{/*	rules={{ */}
							{/*		required: 'Введите e-mail', */}
							{/*	}} */}
							{/*	render={({ field: { onChange, onBlur, value, ref }, fieldState: { error } }) => ( */}
							{/*		<> */}
							{/*			<MainInput */}
							{/*				onChange={onChange} */}
							{/*				onBlur={onBlur} */}
							{/*				innerRef={ref} */}
							{/*				value={value || ''} */}
							{/*				type='email' */}
							{/*			/> */}
							{/*			<ErrorWarning errorText={error?.message} /> */}
							{/*		</> */}
							{/*	)} */}
							{/* /> */}
						</div>
						<div className={styles.inputGroup}>
							<label>Создайте пароль для входа в систему*</label>
							{/* <Controller */}
							{/*	name='password' */}
							{/*	control={control} */}
							{/*	rules={{ */}
							{/*		required: 'Введите пароль', */}
							{/*	}} */}
							{/*	render={({ field: { onChange, onBlur, value, ref }, fieldState: { error } }) => ( */}
							{/*		<> */}
							{/*			<MainInput */}
							{/*				onChange={onChange} */}
							{/*				onBlur={onBlur} */}
							{/*				innerRef={ref} */}
							{/*				value={value || ''} */}
							{/*				type='password' */}
							{/*			/> */}
							{/*			<ErrorWarning errorText={error?.message} /> */}
							{/*		</> */}
							{/*	)} */}
							{/* /> */}
						</div>
						<div className={styles.inputGroup}>
							<label>Введите пароль повторно*</label>
							{/* <Controller */}
							{/*	name='passwordRepeat' */}
							{/*	control={control} */}
							{/*	rules={{ */}
							{/*		required: 'Введите пароль повторно', */}
							{/*	}} */}
							{/*	render={({ field: { onChange, onBlur, value, ref }, fieldState: { error } }) => ( */}
							{/*		<> */}
							{/*			<MainInput */}
							{/*				onChange={onChange} */}
							{/*				onBlur={onBlur} */}
							{/*				innerRef={ref} */}
							{/*				value={value || ''} */}
							{/*				type='password' */}
							{/*			/> */}
							{/*			<ErrorWarning errorText={error?.message} /> */}
							{/*		</> */}
							{/*	)} */}
							{/* /> */}
						</div>
						<Button type='submit' background='#66ACCC' margin='60px 0 0 0' width='80%'>
							подать заявку
						</Button>
					</div>
				)}
			</form>
		</div>
	)
}
