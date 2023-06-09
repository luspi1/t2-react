import { type SelOption } from 'src/types/select'

export const ObjectsStatusOptions: SelOption[] = [
	{ value: '', label: 'Все статусы' },
	{ value: 'draft', label: 'Черновик' },
	{ value: 'await', label: 'Ожидает' },
	{ value: 'inWork', label: 'В работе' },
	{ value: 'sold', label: 'Продан' },
]
export const ObjectsOnAucOptions: SelOption[] = [
	{ value: '', label: 'Все объекты' },
	{ value: 'onAuc', label: 'На аукционе' },
	{ value: 'withoutAuc', label: 'Без аукциона' },
]
