import { type FC, useEffect, useRef } from 'react'
import { Route, Routes } from 'react-router-dom'
import { AppRoute } from '../../helpers/consts'

import { Layout } from '../Layout/Layout'
import { HomePage } from '../../pages/HomePage/HomePage'
import { OrganizationsPage } from '../../pages/OrganizationsPage/OrganizationsPage'
import { AuctionsPage } from '../../pages/AuctionsPage/AuctionsPage'
import { ObjectsPage } from '../../pages/ObjectsPage/ObjectsPage'
import { InfoDocumentsPage } from '../../pages/InfoDocumentsPage/InfoDocumentsPage'
import { ObjectItemPage } from '../../pages/ObjectItemPage/ObjectItemPage'
import { useAppDispatch } from '../../hooks/store'
import { setAllObjects } from '../../pages/ObjectsPage/store/ObjectsSlice/objects.slice'
import { CreateObject } from '../../pages/CreateObject/CreateObject'

export const App: FC = () => {
	const dispatch = useAppDispatch()
	const isRenderedRef = useRef<boolean>(false)
	useEffect(() => {
		if (!isRenderedRef.current) {
			dispatch(setAllObjects())
		}
		isRenderedRef.current = true
	}, [])

	return (
		<Routes>
			<Route path={AppRoute.Main} element={<Layout />}>
				<Route index element={<HomePage />} />
				<Route path={AppRoute.Org} element={<OrganizationsPage />} />
				<Route path={AppRoute.Auc} element={<AuctionsPage />} />
				<Route path={AppRoute.Obj} element={<ObjectsPage />} />
				<Route path={AppRoute.ObjCreate} element={<CreateObject />} />
				<Route path={AppRoute.ObjItem} element={<ObjectItemPage />} />
				<Route path={AppRoute.InfoDoc} element={<InfoDocumentsPage />} />
			</Route>
		</Routes>
	)
}
export default App
