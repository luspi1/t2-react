import { type FC } from 'react'
import { Outlet } from 'react-router-dom'

import styles from './index.module.scss'
import { NavMenu } from '../NavMenu/NavMenu'
import { Footer } from '../Footer/Footer'

export const Layout: FC = () => {
	return (
		<>
			<NavMenu />
			<main className={styles.Container}>
				<Outlet />
			</main>
			<Footer />
		</>
	)
}
