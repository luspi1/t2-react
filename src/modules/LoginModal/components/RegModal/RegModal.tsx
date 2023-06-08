import { yupResolver } from '@hookform/resolvers/yup'
import cn from 'classnames'
import React, { type FC, useCallback, useEffect, useState } from 'react'
import { useDropzone } from 'react-dropzone'
import { type FieldValues, type SubmitHandler, useForm } from 'react-hook-form'
import { phoneMask, positiveNumber } from 'src/helpers/masks'
import { RegController } from 'src/modules/LoginModal/components/RegModal/components/RegController'
import { NameMap } from 'src/modules/LoginModal/components/RegModal/consts'
import { regSchema } from 'src/modules/LoginModal/components/RegModal/schema'
import { type FileWithPreview } from 'src/types/files'
import { Button } from 'src/UI/Button'
import { ControlledField } from 'src/UI/ControlledField/СontrolledField'
import { ControlledTextarea } from 'src/UI/ControlledTextarea/ControlledTextarea'

import { ErrorWarning } from 'src/UI/ErrorWarning'
import { FilePreview } from 'src/UI/FilePreview/FilePreview'

import { LockIconSvg } from 'src/UI/icons/LockIconSVG'
import { MailIconSvg } from 'src/UI/icons/MailIconSVG'
import { PhoneIconSvg } from 'src/UI/icons/PhoneIconSVG'
import mainStyles from '../../index.module.scss'

import styles from './index.module.scss'

export const RegModal: FC = () => {
	const [regStep, setRegStep] = useState<number>(5)
	const [dzFiles, setDzFiles] = useState<FileWithPreview[]>([])

	const onDrop = useCallback((acceptedFiles: File[]) => {
		if (acceptedFiles?.length) {
			setDzFiles((prevFiles) => [
				...prevFiles,
				...acceptedFiles.map((file) => Object.assign(file, { preview: URL.createObjectURL(file) })),
			])
		}
	}, [])
	const { getRootProps, getInputProps } = useDropzone({ onDrop })

	const deletePreviewImg = (imgArr: FileWithPreview[], imgName: string) => {
		const newFiles = imgArr.filter((el) => el.name !== imgName)
		setDzFiles(newFiles)
	}

	useEffect(
		() => () => {
			dzFiles.forEach((file) => URL.revokeObjectURL(file.preview))
		},
		[dzFiles]
	)

	const {
		handleSubmit,
		control,
		trigger,
		formState: { errors },
	} = useForm<FieldValues>({
		mode: 'onChange',
		resolver: yupResolver(regSchema),
	})

	const onSubmit: SubmitHandler<FieldValues> = (data) => {
		setRegStep(6)
		const allData = {
			...data,
			scanFiles: dzFiles,
		}

		console.log(allData)
	}

	const decrementStep = () => {
		setRegStep(regStep - 1)
	}
	const incrementStep = async () => {
		const result = await trigger(NameMap[regStep])
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
							<ControlledField
								control={control}
								mask={positiveNumber}
								name='seriesAndNumber'
								type='text'
								errors={errors}
							/>
						</div>
						<div className={styles.inputGroup}>
							<label>Орган, выдавший паспорт*</label>
							<ControlledTextarea control={control} name='issuedBy_RU' errors={errors} />
						</div>
						<div className={styles.inputGroup}>
							<label>Дата выдачи*</label>
							<ControlledField control={control} name='dateOfIssue' type='date' errors={errors} />
						</div>
						<div className={styles.inputGroup}>
							<label>Дата окончания срока действия*</label>
							<ControlledField control={control} name='validity' type='date' errors={errors} />
						</div>
						<div className={styles.inputGroup}>
							<label>Адрес регистрации*</label>
							<ControlledTextarea control={control} name='placeOfPermanentReg_RU' errors={errors} />
						</div>
					</div>
				)}
				{regStep === 3 && (
					<div className={styles.formStep}>
						<div className={styles.inputGroup}>
							<p>Банковские реквизиты</p>
							<label>Номер счета*</label>
							<ControlledField
								control={control}
								mask={positiveNumber}
								name='accountNumber'
								type='text'
								errors={errors}
							/>
						</div>
						<div className={styles.inputGroup}>
							<label>МФО*</label>
							<ControlledTextarea control={control} name='bankMFO' errors={errors} />
						</div>
						<div className={styles.inputGroup}>
							<label>Наименование банка*</label>
							<ControlledTextarea control={control} name='bankName_RU' errors={errors} />
						</div>
						<div className={styles.inputGroup}>
							<label>Получатель*</label>
							<ControlledTextarea control={control} name='checkingAccount' errors={errors} />
						</div>
						<div className={styles.inputGroup}>
							<label>Дата окончания срока действия*</label>
							<ControlledField control={control} name='bankDateEnded' type='date' errors={errors} />
						</div>
						<div className={styles.inputGroup}>
							<label>Дата добавления счета**</label>
							<ControlledField control={control} name='bankDateAdded' type='date' errors={errors} />
						</div>
					</div>
				)}
				{regStep === 4 && (
					<div className={styles.formStep}>
						<div className={styles.inputGroup}>
							<label>Приложите сканы документа*</label>

							<div className={cn(styles.mainDropzone)}>
								<h4>Перетяните изображение в это поле или</h4>
								<div className={styles.innerDropzone} {...getRootProps()}>
									<button className={styles.dropzoneBtn} type='button'>
										Загрузите файл
									</button>
									<input {...getInputProps()} />
								</div>

								<ul className={styles.filesList}>
									{dzFiles.map((f: FileWithPreview) => (
										<FilePreview
											key={f.name}
											imgSrc={f.preview}
											imgName={f.name}
											onDeleteImg={() => deletePreviewImg(dzFiles, f.name)}
										/>
									))}
								</ul>
							</div>
						</div>

						<span className={mainStyles.or}>или</span>
						<div className={styles.inputGroup}>
							<label>Добавьте ссылку на изображение*</label>
							<ControlledField control={control} name='scans' type='text' errors={errors} />
						</div>
						<div className={styles.inputGroup}>
							<label>Дополнительные сведения о себе*</label>
							<ControlledTextarea control={control} name='docDescription' errors={errors} />
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

							<ControlledField
								control={control}
								mask={phoneMask}
								name='mobileNumber'
								svg={<PhoneIconSvg />}
								type='text'
								errors={errors}
							/>
						</div>
						<div className={styles.inputGroup}>
							<label>Введите адрес электронной почты*</label>
							<ControlledField
								placeholder='konstantin@konstantin.com'
								control={control}
								name='email'
								type='text'
								svg={<MailIconSvg />}
								errors={errors}
							/>
						</div>
						<div className={styles.inputGroup}>
							<label>Создайте пароль для входа в систему*</label>
							<ControlledField
								control={control}
								name='password'
								type='password'
								svg={<LockIconSvg />}
								errors={errors}
							/>
						</div>
						<div className={styles.inputGroup}>
							<label>Введите пароль повторно*</label>
							<ControlledField
								control={control}
								name='passwordRepeat'
								type='password'
								svg={<LockIconSvg />}
								errors={errors}
							/>
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
