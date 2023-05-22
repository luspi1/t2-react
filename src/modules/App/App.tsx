import { type FC, useEffect, useRef, useState } from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'
import { AppRoute } from 'src/helpers/consts'

import { Layout } from 'src/modules/Layout/Layout'
import { HomePage } from 'src/pages/HomePage/HomePage'
import { OrganizationsPage } from 'src/pages/OrganizationsPage/OrganizationsPage'
import { AuctionsPage } from 'src/pages/AuctionsPage/AuctionsPage'
import { ObjectsPage } from 'src/pages/ObjectsPage/ObjectsPage'
import { InfoDocumentsPage } from 'src/pages/InfoDocumentsPage/InfoDocumentsPage'
import { ObjectItemPage } from 'src/pages/ObjectItemPage/ObjectItemPage'
import { useAppDispatch } from 'src/hooks/store'
import { setAllObjects } from 'src/pages/ObjectsPage/store/ObjectsSlice/objects.slice'
import { CreateObjectPage } from 'src/pages/CreateObjectPage/CreateObjectPage'
import { LoginPage } from 'src/pages/LoginPage/LoginPage'

export const App: FC = () => {
	const dispatch = useAppDispatch()
	const isRenderedRef = useRef<boolean>(false)

	const [isAuth] = useState(false)
	const navigate = useNavigate()

	useEffect(() => {
		if (!isRenderedRef.current) {
			dispatch(setAllObjects())
		}

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
