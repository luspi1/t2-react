import { type FC } from 'react'
import { Route, Routes } from 'react-router-dom'
import { Layout } from '../Layout/Layout'
import { Home } from '../../pages/Home/Home'
import { Organizations } from '../../pages/Organizations/Organizations'

export const App: FC = () => {
	return (
		<Routes>
			<Route path='/' element={<Layout />}>
				<Route index element={<Home />} />
				<Route path='/organizations' element={<Organizations />} />
			</Route>
		</Routes>
	)
}
export default App
