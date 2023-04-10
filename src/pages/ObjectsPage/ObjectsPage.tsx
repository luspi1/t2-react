import { type FC } from 'react'
import { MainTitle } from 'src/UI/MainTitle'
import { Container } from 'src/UI/Container'
import { ObjectList } from './components/ObjectList/ObjectList'
import { Helmet } from 'react-helmet-async'
import { ObjectFiltration } from './components/ObjectFiltration/ObjectFiltration'

export const ObjectsPage: FC = () => {
	return (
		<Container margin='0 auto 35px auto'>
			<Helmet>
				<title>Объекты</title>
			</Helmet>
			<MainTitle padding='38px 0 32px 20px'>Объекты</MainTitle>
			<div className='objects__inner'>
				<ObjectFiltration />
				<ObjectList />
			</div>
		</Container>
	)
}
