import { type FC } from 'react'

import styles from './index.module.scss'
export const Footer: FC = () => {
	return (
		<footer className={styles.Footer}>
			<div className={styles.Container}>
				<p>Copyright & footer</p>
			</div>
		</footer>
	)
}
