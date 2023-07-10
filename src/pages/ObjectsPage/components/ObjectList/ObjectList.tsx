import { type FC } from 'react'
import { ObjectItem } from 'src/pages/ObjectsPage/components/ObjectItem/ObjectItem'
import { useGetObjectsQuery } from 'src/store/objects/objects.api'
import { ErrorWarning } from 'src/UI/ErrorWarning'
// import { getAllFilteredObjects } from 'src/pages/ObjectsPage/store/ObjectsSlice/objects.selectors'

export const ObjectList: FC = () => {
	const { data, isError, isLoading } = useGetObjectsQuery('')

	if (isError) {
		return <ErrorWarning errorText='Ошибка получения объектов' />
	}
	return (
		<ul className='objects__list'>
			{isLoading && <h2>Загрузка...</h2>}
			{data?.map((obj) => (
				<ObjectItem key={obj.id} {...obj} />
			))}
		</ul>
	)
}
