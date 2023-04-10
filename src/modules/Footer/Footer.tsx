import { type FC } from 'react'

import styles from './index.module.scss'
import { Container } from 'src/UI/Container'

export const Footer: FC = () => {
	return (
		<footer className={styles.Footer}>
			<Container className={styles.Container} width='1240px'>
				<p>Copyright & footer</p>
			</Container>
		</footer>
	)
}
