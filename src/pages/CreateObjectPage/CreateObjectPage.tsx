import { type FC } from 'react'
import { Container } from 'src/UI/Container'
import { Helmet } from 'react-helmet-async'
import { MainTitle } from 'src/UI/MainTitle'
// import { CreateObjForm } from 'src/pages/CreateObjectPage/components/CreateObjForm/CreateObjForm'

export const CreateObjectPage: FC = () => {
	return (
		<Container className='index-page' margin='0 auto 35px auto'>
			<Helmet>
				<title>Создание объекта</title>
			</Helmet>
			<MainTitle padding='38px 0 32px 20px'>Создание объекта</MainTitle>
			{/* <CreateObjForm /> */}
		</Container>
	)
}
