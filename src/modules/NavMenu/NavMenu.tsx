import { type FC } from 'react'
import styles from './index.module.scss'
import { Container } from 'src/UI/Container'
import { Flex } from 'src/UI/Flex'
import { NavigationList } from './components/NavigationList/NavigationList'
import { PersonalMenu } from './components/PersonalMenu/PersonalMenu'

export const NavMenu: FC = () => {
	return (
		<div className={styles.mainMenu}>
			<Container padding='0 70px 0 5px' width='1230px'>
				<Flex justify='space-between' align='center'>
					<NavigationList />
					<PersonalMenu />
				</Flex>
			</Container>
		</div>
	)
}
