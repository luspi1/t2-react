import { type FC } from 'react'
import styles from './index.module.scss'
import { NavMenu } from '../NavMenu/NavMenu'

export const App: FC = () => {
	return (
		<div className={styles.App}>
			<NavMenu />
		</div>
	)
}
export default App
