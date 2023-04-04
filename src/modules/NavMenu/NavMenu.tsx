import { type FC } from 'react'
import styles from './index.module.scss'
import avatarImg from '../../assets/img/avatar-sm.png'
import ruLang from '../../assets/img/ru-lang.png'
import uzbLang from '../../assets/img/uzb-lang.png'

export const NavMenu: FC = () => {
	return (
		<div className={styles.MainMenu}>
			<div className={styles.Container}>
				<nav className={styles.Nav}>
					<ul className={styles.NavList}>
						<li>
							<a href='index.html'>Главная страница</a>
						</li>
						<li>
							<a href='objects-all.html'>Объекты недвижимости</a>
						</li>
						<li>
							<a href='auctions-all.html'>Аукционы</a>
						</li>
						<li className='@active-organizations-all'>
							<a href='organizations-all.html'>Организации</a>
						</li>
						<li>
							<a href='#'>Информация и документы</a>
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
						<a
							className={styles.PersonalAvatarLink}
							href='#'
						>
							<img
								src={avatarImg}
								alt='аватар профиля'
							/>
						</a>
					</div>
					<div className='main-menu__lang-switch'>
						<button
							className={styles.LangBtn}
							type='button'
							title='Oʻzbek'
						>
							<img
								src={uzbLang}
								alt='Переключить на узбекский'
							/>
						</button>
						<button
							className='main-menu__lang-btn'
							type='button'
							title='Русский'
						>
							<img
								src={ruLang}
								alt='Переключить на русский'
							/>
						</button>
					</div>
				</div>
			</div>
		</div>
	)
}
