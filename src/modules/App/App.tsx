import { type FC } from 'react'
import { Route, Routes } from 'react-router-dom'
import { AppRoute } from '../../helpers/consts'

import { Layout } from '../Layout/Layout'
import { HomePage } from '../../pages/HomePage/HomePage'
import { OrganizationsPage } from '../../pages/OrganizationsPage/OrganizationsPage'
import { AuctionsPage } from '../../pages/AuctionsPage/AuctionsPage'
import { ObjectsPage } from '../../pages/ObjectsPage/ObjectsPage'
import { InfoDocumentsPage } from '../../pages/InfoDocumentsPage/InfoDocumentsPage'

export const App: FC = () => {
	return (
		<Routes>
			<Route path={AppRoute.Main} element={<Layout />}>
				<Route index element={<HomePage />} />
				<Route path={AppRoute.Org} element={<OrganizationsPage />} />
				<Route path={AppRoute.Auc} element={<AuctionsPage />} />
				<Route path={AppRoute.Obj} element={<ObjectsPage />} />
				<Route path={AppRoute.InfoDoc} element={<InfoDocumentsPage />} />
			</Route>
		</Routes>
	)
}
export default App
