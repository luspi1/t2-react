import * as yup from 'yup'

export const regSchema = yup.object({
	secondName_RU: yup.string().required('Введите фамилию'),
	name_RU: yup.string().required('Введите имя'),
	patronymicName_RU: yup.string().required('Введите отчество'),
	dataBirth: yup.date().typeError('Введите дату в формате дд.мм.гггг').required('Введите дату'),
	placeOfBirth_RU: yup.string().required('Введите место рождения'),
	inn: yup.string().min(10, 'Введите 10 цифр').max(10, 'Введите 10 цифр').required('Введите инн'),
})
