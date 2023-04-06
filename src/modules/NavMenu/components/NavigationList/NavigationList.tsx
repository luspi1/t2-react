import { NavLink } from 'react-router-dom'
import { type FC } from 'react'
import { NavMenuMap } from './consts'
import styles from './index.module.scss'

type NavLinkType =
	| string
	| ((props: { isActive: boolean; isPending: boolean }) => string | undefined)
	| undefined
const setActiveNav: NavLinkType = ({ isActive }) => (isActive ? 'nav-link _active' : 'nav-link')

export const NavigationList: FC = () => {
	return (
		<nav className={styles.nav}>
			<ul className={styles.navList}>
				{NavMenuMap.map((el) => (
					<li key={el.title}>
						<NavLink className={setActiveNav} to={el.link}>
							{el.title}
						</NavLink>
					</li>
				))}
			</ul>
		</nav>
	)
}
