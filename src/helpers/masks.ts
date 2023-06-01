import { createAutoCorrectedDatePipe, createNumberMask } from 'text-mask-addons'

export const currencyMask = createNumberMask({
	prefix: '',
	suffix: ' ₽',
	thousandsSeparatorSymbol: '.',
})

export const dateMask = [/\d/, /\d/, '.', /\d/, /\d/, '.', /\d/, /\d/, /\d/, /\d/]
