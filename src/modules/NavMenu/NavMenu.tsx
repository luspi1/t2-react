import { type FC } from 'react'
import styles from './index.module.scss'
import avatarImg from '../../assets/img/avatar-sm.png'
import ruLang from '../../assets/img/ru-lang.png'
import uzbLang from '../../assets/img/uzb-lang.png'
import { NavLink } from 'react-router-dom'
import { Container } from '../../UI/Container'
import { Flex } from '../../UI/Flex'

export const NavMenu: FC = () => {
	return (
		<div className={styles.MainMenu}>
			<Container padding='0 70px 0 35px'>
				<Flex justify='space-between' align='center'>
					<nav className={styles.Nav}>
						<ul className={styles.NavList}>
							<li>
								<NavLink to='/'>Главная страница</NavLink>
							</li>
							<li>
								<NavLink to='/'>Объекты недвижимости</NavLink>
							</li>
							<li>
								<NavLink to='/'>Аукционы</NavLink>
							</li>
							<li>
								<NavLink to='/organizations'>Организации</NavLink>
							</li>
							<li>
								<NavLink to='/organizations'>Информация и документы</NavLink>
							</li>
						</ul>
					</nav>
					<div className={styles.Personal}>
						<div className={styles.PersonalAvatar}>
							<div className={styles.PersonalMenu}>
								<h4>Константинов Константин Константинович</h4>
								<ul>
									<li>
										<a href='profile.html'>Мой профиль</a>
									</li>
									<li>
										<a href='#'>Мои документы</a>
									</li>
									<li>
										<a href='services.html'>Мои услуги</a>
									</li>
									<li>
										<a href='organizations.html'>Мои организации</a>
									</li>
									<li>
										<a href='auctions.html'>Мои аукционы</a>
									</li>
									<li>
										<a href='objects.html'>Мои объекты</a>
									</li>
								</ul>
							</div>
							<a className={styles.PersonalAvatarLink} href='#'>
								<img src={avatarImg} alt='аватар профиля' />
							</a>
						</div>
						<div className='main-menu__lang-switch'>
							<button className={styles.LangBtn} type='button' title='Oʻzbek'>
								<img src={uzbLang} alt='Переключить на узбекский' />
							</button>
							<button className='main-menu__lang-btn' type='button' title='Русский'>
								<img src={ruLang} alt='Переключить на русский' />
							</button>
						</div>
					</div>
				</Flex>
			</Container>
		</div>
	)
}
