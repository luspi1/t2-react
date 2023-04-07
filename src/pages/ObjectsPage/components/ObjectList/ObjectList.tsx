import { type FC } from 'react'
import { ObjectItem } from '../ObjectItem/ObjectItem'
import { useAppSelector } from '../../../../hooks/store'
import { getAllFilteredObjects } from '../../store/ObjectsSlice/objects.selectors'

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
