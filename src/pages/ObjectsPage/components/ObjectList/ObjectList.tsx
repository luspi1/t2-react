import { type FC } from 'react'
import { ObjectItem } from 'src/pages/ObjectsPage/components/ObjectItem/ObjectItem'
import { type ObjItem } from 'src/types/objects'
import { ErrorWarning } from 'src/UI/ErrorWarning'

type ObjectListProps = {
	objList?: ObjItem[]
	isLoading: boolean
	isError: boolean
}

export const ObjectList: FC<ObjectListProps> = ({ objList, isLoading, isError }) => {
	if (isError) {
		return <ErrorWarning errorText='Ошибка получения объектов' />
	}
	return (
		<ul className='objects__list'>
			{isLoading && <h2>Загрузка...</h2>}
			{objList?.map((obj) => (
				<ObjectItem key={obj.id} {...obj} />
			))}
		</ul>
	)
}
