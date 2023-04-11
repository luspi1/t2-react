import { type FC } from 'react'
import { type Inputs } from 'src/pages/CreateObjectPage/components/CreateObjForm/types'
import { type SelOption } from 'src/types/select'
import { type ObjectItem } from 'src/types/objects'

import { Controller, type SubmitHandler, useForm } from 'react-hook-form'
import Select from 'react-select'
import { TypeDocOptions } from 'src/pages/CreateObjectPage/components/CreateObjForm/consts'
import { getValue } from 'src/helpers/utils'

import { ObjCodeSvg } from 'src/UI/icons/ObjCodeSVG'
import { WarningIconSvg } from 'src/UI/icons/WarningIconSVG'
import { PriceIconSvg } from 'src/UI/icons/PriceIconSVG'
import { TitleIconSvg } from 'src/UI/icons/TitleIconSVG'
import { AddressIconSvg } from 'src/UI/icons/AddressIconSVG'
import { KeyIconSvg } from 'src/UI/icons/KeyIconSVG'
import { BuildingIconSvg } from 'src/UI/icons/BuildingIconSVG'
import { ScanIconSvg } from 'src/UI/icons/ScanIconSVG'
import { DocumentsIconSvg } from 'src/UI/icons/DocumentsIconSVG'
import { DescObjIconSvg } from 'src/UI/icons/DescObjIconSVG'
import { PlusBtnIconSvg } from 'src/UI/icons/PlusBtnIconSVG'
import { ErrorWarning } from 'src/UI/ErrorWarning'
import { AppRoute, ObjectsStatuses, ObjectsStatusesContent } from 'src/helpers/consts'
import { useAppDispatch } from 'src/hooks/store'
import { addObject } from 'src/pages/ObjectsPage/store/ObjectsSlice/objects.slice'
import { useNavigate } from 'react-router-dom'

export const CreateObjForm: FC = () => {
	const dispatch = useAppDispatch()
	const navigate = useNavigate()

	const {
		register,
		control,
		handleSubmit,
		formState: { errors },
	} = useForm<Inputs>({ mode: 'onBlur' })
	const onSubmit: SubmitHandler<Inputs> = (data) => {
		const { objDescription, objPrice, objTitle, objAddress } = data
		const processedData: ObjectItem = {
			id: Math.random(),
			objectCode: objTitle.ru,
			objectSize: 123,
			objectPriceInRubles: objPrice.ru,
			auctionObjectStatus: {
				statusProperty: ObjectsStatuses.await,
				statusContent: ObjectsStatusesContent.await,
			},
			objectInnerDescription: objDescription.descRu,
			objectAddressRU: objAddress.ru,
			objectAuctionNumber: '111-111-111',
			isObjAuc: 'onAuc',
		}
		dispatch(addObject(processedData))
		navigate(AppRoute.Obj)
	}

	return (
		<form className='new-object-form' onSubmit={handleSubmit(onSubmit)}>
			<div className='new-object-form__item'>
				<div className='new-object-form__icon'>
					<ObjCodeSvg />
				</div>
				<div className='new-object-form__wrapper'>
					<div className='new-object-form__row'>
						<h3 className='new-object-form__title'>КОД ОБЪЕКТА</h3>
						<p className='new-object-form__code'>219540-567-К</p>
						<div className='new-object-form__warning'>
							<WarningIconSvg />
							<p>
								Код объекта присваивается Системой автоматически,
								<br />
								задать или поменять его нельзя
							</p>
						</div>
					</div>
				</div>
			</div>
			<div className='new-object-form__item'>
				<div className='new-object-form__icon'>
					<PriceIconSvg />
				</div>
				<div className='new-object-form__wrapper'>
					<div className='new-object-form__row new-object-form__row-top'>
						<h3 className='new-object-form__title'>СТОИМОСТЬ ОБЪЕКТА</h3>
					</div>
					<div className='new-object-form__row'>
						<div className='new-object-form__input-wrapper'>
							<label>Узбекские сомы</label>
							<input
								className='new-object-form__input'
								{...register('objPrice.uzb', {
									required: 'Укажите стоимость в сомах',
								})}
								type='text'
							/>
						</div>
						<div className='new-object-form__input-wrapper'>
							<label>Рубли РФ</label>
							<input
								className='new-object-form__input'
								{...register('objPrice.ru', {
									required: 'Укажите стоимость в рублях',
								})}
								type='text'
							/>
						</div>
						<div className='new-object-form__input-wrapper'>
							<label>Доллары США</label>
							<input
								className='new-object-form__input'
								{...register('objPrice.usd', {
									required: 'Укажите стоимость в долларах',
								})}
								type='text'
							/>
						</div>
						<div className='new-object-form__input-wrapper'>
							<label>Юани КНР</label>
							<input
								className='new-object-form__input'
								{...register('objPrice.cny', {
									required: 'Укажите стоимость в юанях',
								})}
								type='text'
							/>
						</div>
					</div>
					<ErrorWarning errorText={errors.objPrice?.uzb?.message} />
					<ErrorWarning errorText={errors.objPrice?.ru?.message} />
					<ErrorWarning errorText={errors.objPrice?.usd?.message} />
					<ErrorWarning errorText={errors.objPrice?.cny?.message} />
				</div>
			</div>
			<div className='new-object-form__item'>
				<div className='new-object-form__icon'>
					<TitleIconSvg />
				</div>
				<div className='new-object-form__wrapper'>
					<div className='new-object-form__row new-object-form__row-top'>
						<h3 className='new-object-form__title'>НАЗВАНИЕ ОБЪЕКТА</h3>
					</div>
					<div className='new-object-form__row'>
						<textarea
							className='new-object-form__textarea new-object-form__textarea-name'
							{...register('objTitle.uzb', {
								required: 'Укажите название объекта на узбекском',
							})}
							placeholder='Задайте понятное название объекта на узбекском'
						></textarea>
						<textarea
							className='new-object-form__textarea new-object-form__textarea-name'
							{...register('objTitle.ru', {
								required: 'Укажите название объекта на русском',
							})}
							placeholder='Задайте понятное название объекта на русском'
						></textarea>
					</div>
					<ErrorWarning errorText={errors.objTitle?.uzb?.message} />
					<ErrorWarning errorText={errors.objTitle?.ru?.message} />
				</div>
			</div>
			<div className='new-object-form__item'>
				<div className='new-object-form__icon'>
					<AddressIconSvg />
				</div>
				<div className='new-object-form__wrapper'>
					<div className='new-object-form__row new-object-form__row-top'>
						<h3 className='new-object-form__title'>АДРЕС ОБЪЕКТА</h3>
					</div>
					<div className='new-object-form__row'>
						<textarea
							className='new-object-form__textarea form__textarea-address'
							{...register('objAddress.uzb', {
								required: 'Укажите адрес на узбекском',
							})}
							placeholder='Введите полный адрес объекта, начиная с названия населенного пункта, на узбекском'
						></textarea>
						<textarea
							className='new-object-form__textarea form__textarea-address'
							{...register('objAddress.ru', {
								required: 'Укажите адрес на русском',
							})}
							placeholder='Введите полный адрес объекта, начиная с названия населенного пункта, на русском'
						></textarea>
					</div>
					<ErrorWarning errorText={errors.objAddress?.uzb?.message} />
					<ErrorWarning errorText={errors.objAddress?.ru?.message} />
				</div>
			</div>
			<div className='new-object-form__item new-object-form__item-developer'>
				<div className='new-object-form__icon'>
					<KeyIconSvg />
				</div>
				<div className='new-object-form__wrapper'>
					<div className='new-object-form__row new-object-form__row-top'>
						<h3 className='new-object-form__title'>ЗАСТРОЙЩИК ОБЪЕКТА</h3>
					</div>
					<div className='new-object-form__row'>
						<div className='new-object-form__item-developer-desc'>
							<p>Общество с ограниченной ответственностью «А-валид Эстейт»</p>
							<p>ИНН: 998990099233</p>
						</div>
						<div className='new-object-form__warning'>
							<WarningIconSvg />
							<p>Застройщик указывается автоматически</p>
						</div>
					</div>
				</div>
			</div>
			<div className='new-object-form__item'>
				<div className='new-object-form__icon'>
					<BuildingIconSvg />
				</div>
				<div className='new-object-form__wrapper'>
					<div className='new-object-form__row new-object-form__row-top'>
						<h3 className='new-object-form__title'>ОСНОВАНИЕ ДЛЯ ЗАСТРОЙКИ</h3>
					</div>
					<div className='new-object-form__owner'>
						<div className='new-object-form__input-row'>
							<div className='new-object-form__owner-type'>
								<label>Тип документа</label>

								<Controller
									control={control}
									name='objFoundation.docType'
									rules={{
										required: 'Выберите тип!',
									}}
									render={({ field: { onChange, value }, fieldState: { error } }) => (
										<>
											<Select
												classNamePrefix='custom-select'
												options={TypeDocOptions}
												placeholder='Выбор типа документа'
												value={getValue(value, TypeDocOptions)}
												onChange={(newValue) => {
													onChange((newValue as SelOption).value)
												}}
											/>
											<ErrorWarning errorText={error?.message} />
										</>
									)}
								/>
							</div>
							<div className='new-object-form__input-wrapper'>
								<label>Номер документа</label>
								<input
									className='new-object-form__input number-mask'
									type='text'
									placeholder='Введите номер документа'
									{...register('objFoundation.docNumber', {
										required: 'Укажите номер документа',
									})}
								/>
							</div>
							<div className='new-object-form__input-wrapper date-time-input__date'>
								<label>Дата подписания</label>
								<input
									className='new-object-form__input'
									type='text'
									placeholder='дд-мм-ггггг'
									{...register('objFoundation.docSignDate', {
										required: 'Укажите дату',
									})}
								/>
							</div>
							<div id='new-object-scan-doc-dropzone' className='dropzone'>
								<div className='dz-message'>
									<button
										className='new-object-form__item-btn-scan-doc-add'
										id='new-object-scan-doc-add'
										type='button'
										title='Загрузить скан документа'
									>
										<ScanIconSvg />
										<span>загрузить скан документа</span>
									</button>
								</div>
							</div>
							<div className='new-object-form__input-wrapper'>
								<label>Орган, издавший документ</label>
								<input
									className='new-object-form__input'
									type='text'
									placeholder='Введите название разрешительного органа'
									{...register('objFoundation.docPublisher', {
										required: 'Укажите название разрешительного органа',
									})}
								/>
							</div>
							<div className='new-object-form__warning'>
								<WarningIconSvg />
								<p> Введите данные документа без ошибок</p>
							</div>
						</div>
						<ErrorWarning errorText={errors.objFoundation?.docNumber?.message} />
						<ErrorWarning errorText={errors.objFoundation?.docSignDate?.message} />
						<ErrorWarning errorText={errors.objFoundation?.docPublisher?.message} />
					</div>
				</div>
			</div>
			<div className='new-object-form__item new-object-form__item-documents'>
				<div className='new-object-form__icon'>
					<DocumentsIconSvg />
				</div>
				<div className='new-object-form__wrapper'>
					<div className='new-object-form__row new-object-form__row-top'>
						<h3 className='new-object-form__title'>ДОКУМЕНТЫ ОБЪЕКТА</h3>
					</div>
					<div id='new-object-doc-dropzone' className='dropzone'>
						<div className='dz-message'>
							<button
								className='new-object-form__item-btn new-object-form__item-btn-doc-add'
								id='new-object-doc-add'
								type='button'
								title='Добавить документ объекта'
							>
								<PlusBtnIconSvg />
							</button>
						</div>
					</div>
				</div>
			</div>
			<div className='new-object-form__item new-object-form__item-description'>
				<div className='new-object-form__icon'>
					<DescObjIconSvg />
				</div>
				<div className='new-object-form__wrapper'>
					<div className='new-object-form__row new-object-form__row-top'>
						<h3 className='new-object-form__title'>ОПИСАНИЕ ОБЪЕКТА</h3>
					</div>
					<div className='new-object-form__row'>
						<div className='new-object-form__textarea-wrapper'>
							<label>Описание объекта на узбекском</label>
							<textarea
								className='new-object-form__textarea'
								placeholder='Введите описание объекта на узбекском &#10;Так оно будет отображаться в системе'
								{...register('objDescription.descUzb', {
									required: 'Укажите описание объекта на узбекском',
								})}
							></textarea>
						</div>
						<div className='new-object-form__textarea-wrapper'>
							<label>Описание объекта на русском</label>
							<textarea
								className='new-object-form__textarea'
								placeholder='Введите описание объекта на русском &#10;Так оно будет отображаться в системе'
								{...register('objDescription.descRu', {
									required: 'Укажите описание объекта на русском',
								})}
							></textarea>
						</div>
					</div>
					<div className='new-object-form__row'>
						<div className='new-object-form__textarea-wrapper'>
							<label>Внутренний комментарий</label>
							<textarea
								className='new-object-form__textarea'
								placeholder='Добавьте комментарий для пользователей с доступом к редактированию данных'
								{...register('objDescription.innerComment', {
									required: 'Укажите внутренний комментарий',
								})}
							></textarea>
						</div>
						<div className='new-object-form__warning'>
							<WarningIconSvg />
							<p>
								Этот комментарий виден только
								<br />
								Вам и сотрудникам организации
							</p>
						</div>
					</div>
					<ErrorWarning errorText={errors.objDescription?.descRu?.message} />
					<ErrorWarning errorText={errors.objDescription?.descUzb?.message} />
					<ErrorWarning errorText={errors.objDescription?.innerComment?.message} />
				</div>
			</div>
			<div className='new-object-form__buttons'>
				<button className='new-object-form__btn new-object-form__btn-save' type='button'>
					сохранить черновик
				</button>
				<button className='new-object-form__btn new-object-form__btn-publish' type='submit'>
					опубликовать объект
				</button>
			</div>
		</form>
	)
}
