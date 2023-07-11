import { type FC, useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { useGetObjectsQuery } from 'src/store/objects/objects.api'
import { type ObjFiltrationParams } from 'src/types/objects'
import { Container } from 'src/UI/Container'
import { MainTitle } from 'src/UI/MainTitle'
import { ObjectFiltration } from './components/ObjectFiltration/ObjectFiltration'
import { ObjectList } from './components/ObjectList/ObjectList'

export const ObjectsPage: FC = () => {
	const [filtrationParams, setFiltrationParams] = useState<ObjFiltrationParams>({
		search: '',
		status: '',
		auc: '',
	})

	const { data, isError, isLoading } = useGetObjectsQuery(filtrationParams)

	return (
		<Container margin='0 auto 35px auto'>
			<Helmet>
				<title>Объекты</title>
			</Helmet>
			<MainTitle padding='38px 0 32px 20px'>Объекты</MainTitle>
			<div className='objects__inner'>
				<ObjectFiltration
					setFiltrationParams={setFiltrationParams}
					filtrationParams={filtrationParams}
				/>
				<ObjectList objList={data} isLoading={isLoading} isError={isError} />
			</div>
		</Container>
	)
}
