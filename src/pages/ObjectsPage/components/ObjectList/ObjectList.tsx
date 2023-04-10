import { type FC } from 'react'
import { ObjectItem } from 'src/pages/ObjectsPage/components/ObjectItem/ObjectItem'
import { useAppSelector } from 'src/hooks/store'
import { getAllFilteredObjects } from 'src/pages/ObjectsPage/store/ObjectsSlice/objects.selectors'

export const ObjectList: FC = () => {
	const currentObjects = useAppSelector(getAllFilteredObjects)
	return (
		<ul className='objects__list'>
			{currentObjects.map((obj) => (
				<ObjectItem key={obj.id} {...obj} />
			))}
		</ul>
	)
}
