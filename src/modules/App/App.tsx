import { type FC, useEffect, useRef } from 'react'
import { Route, Routes } from 'react-router-dom'
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
				<Route path={AppRoute.ObjCreate} element={<CreateObjectPage />} />
				<Route path={AppRoute.ObjItem} element={<ObjectItemPage />} />
				<Route path={AppRoute.InfoDoc} element={<InfoDocumentsPage />} />
			</Route>
		</Routes>
	)
}
export default App
