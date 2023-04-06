import { type FC } from 'react'
import styles from './index.module.scss'
import { Link } from 'react-router-dom'
import avatarImg from '../../../../assets/img/avatar-sm.png'
import { LangSwitch } from '../LangSwitch/LangSwitch'
import { AppRoute } from '../../../../helpers/consts'

export const PersonalMenu: FC = () => {
	return (
		<div className={styles.personal}>
			<div className={styles.personalAvatar}>
				<div className={styles.personalMenu}>
					<h4>Константинов Константин Константинович</h4>
					<ul>
						<li>
							<Link to={AppRoute.Main}>Мой профиль</Link>
						</li>
						<li>
							<Link to={AppRoute.Main}>Мои документы</Link>
						</li>
						<li>
							<Link to={AppRoute.Main}>Мои услуги</Link>
						</li>
						<li>
							<Link to={AppRoute.Main}>Мои организации</Link>
						</li>
						<li>
							<Link to={AppRoute.Main}>Мои аукционы</Link>
						</li>
						<li>
							<Link to={AppRoute.Main}>Мои объекты</Link>
						</li>
					</ul>
				</div>
				<Link className={styles.personalAvatarLink} to={AppRoute.Main}>
					<img src={avatarImg} alt='аватар профиля' />
				</Link>
			</div>
			<LangSwitch />
		</div>
	)
}
