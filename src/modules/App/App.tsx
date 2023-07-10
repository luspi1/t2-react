import { type FC, useEffect, useRef, useState } from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'
import { AppRoute } from 'src/helpers/consts'

import { Layout } from 'src/modules/Layout/Layout'
import { AuctionsPage } from 'src/pages/AuctionsPage/AuctionsPage'
import { CreateObjectPage } from 'src/pages/CreateObjectPage/CreateObjectPage'
import { HomePage } from 'src/pages/HomePage/HomePage'
import { InfoDocumentsPage } from 'src/pages/InfoDocumentsPage/InfoDocumentsPage'
import { LoginPage } from 'src/pages/LoginPage/LoginPage'
import { ObjectItemPage } from 'src/pages/ObjectItemPage/ObjectItemPage'
import { ObjectsPage } from 'src/pages/ObjectsPage/ObjectsPage'
import { OrganizationsPage } from 'src/pages/OrganizationsPage/OrganizationsPage'

export const App: FC = () => {
	const isRenderedRef = useRef<boolean>(false)

	const [isAuth] = useState(true)
	const navigate = useNavigate()

	useEffect(() => {
		if (!isAuth) {
			navigate('/login')
		}

		isRenderedRef.current = true
	}, [])

	return (
		<Routes>
			<Route path={AppRoute.Login} element={<LoginPage />} />
			<Route path={AppRoute.Home} element={<Layout />}>
				<Route index element={<HomePage />} />
				<Route path={AppRoute.Org} element={<OrganizationsPage />} />
				<Route path={AppRoute.Auc} element={<AuctionsPage />} />
				<Route path={AppRoute.Obj} element={<ObjectsPage />} />
				<Route path={AppRoute.ObjCreate} element={<CreateObjectPage />} />
				<Route path={AppRoute.ObjItem} element={<ObjectItemPage />} />
				<Route path={AppRoute.InfoDoc} element={<InfoDocumentsPage />} />
			</Route>
		</Routes>
	)
}
export default App
