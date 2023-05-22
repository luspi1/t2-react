import { type FC } from 'react'
import styles from './index.module.scss'
import { Link } from 'react-router-dom'
import avatarImg from '../../../../assets/img/avatar-sm.png'
import { LangSwitch } from 'src/components/LangSwitch/LangSwitch'
import { AppRoute } from 'src/helpers/consts'

export const PersonalMenu: FC = () => {
	return (
		<div className={styles.personal}>
			<div className={styles.personalAvatar}>
				<div className={styles.personalMenu}>
					<h4>Константинов Константин Константинович</h4>
					<ul>
						<li>
							<Link to={AppRoute.Home}>Мой профиль</Link>
						</li>
						<li>
							<Link to={AppRoute.Home}>Мои документы</Link>
						</li>
						<li>
							<Link to={AppRoute.Home}>Мои услуги</Link>
						</li>
						<li>
							<Link to={AppRoute.Home}>Мои организации</Link>
						</li>
						<li>
							<Link to={AppRoute.Home}>Мои аукционы</Link>
						</li>
						<li>
							<Link to={AppRoute.Home}>Мои объекты</Link>
						</li>
					</ul>
				</div>
				<Link className={styles.personalAvatarLink} to={AppRoute.Home}>
					<img src={avatarImg} alt='аватар профиля' />
				</Link>
			</div>
			<LangSwitch />
		</div>
	)
}
