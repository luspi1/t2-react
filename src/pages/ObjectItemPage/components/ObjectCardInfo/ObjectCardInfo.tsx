import { type FC } from 'react'
import { Link } from 'react-router-dom'
import { AppRoute } from 'src/helpers/consts'
import { CheckIconSvg } from 'src/UI/icons/CheckIconSVG'
import { DocumentsIconSvg } from 'src/UI/icons/DocumentsIconSVG'
import { ObjCodeSvg } from 'src/UI/icons/ObjCodeSVG'
import styles from './index.module.scss'

type ObjectCardInfoProps = {
	code: string
	desc: string
	priceRub: number
	addressRu: string
	aucNumber: string | null
}
export const ObjectCardInfo: FC<ObjectCardInfoProps> = ({
	code,
	desc,
	priceRub,
	addressRu,
	aucNumber,
}) => {
	return (
		<section className={styles.objCardInfo}>
			<div className={styles.objCardInfoTop}>
				<p className={styles.uniqNumber}>
					<ObjCodeSvg width='47' height='34' />
					{code}
				</p>
			</div>
			<div className={styles.infoMain}>
				<div className={styles.infoMainLeft}>
					<h1>{desc}</h1>
					<ul className={styles.infoList}>
						<li>
							<h3>Начальная стоимость:</h3>
							<p>{priceRub} рублей</p>
						</li>
						<li>
							<h3>Адрес Объекта:</h3>
							<p>{addressRu}</p>
						</li>
						<li>
							<h3>Застройщик Объекта:</h3>
							<p>ООО «А-валид Эстейт»; ИНН: 998990099233</p>
						</li>
						<li>
							<h3>Объект добавлен в базу:</h3>
							<div>
								<p>Менеджером ООО «А-валид Эстейт» Валиевым И.Н.</p>
								<p>01 ноября 2022 года</p>
							</div>
						</li>
						<li>
							<h3>Объект в Системе:</h3>
							<p>Объект 219540-567-К ранее не выставлялся на торги в Системе</p>
						</li>
						<li>
							<h3>Основание застройки:</h3>
							<div>
								<p>Приказ № 22 349 от 04.09.2022 года Администрация Ташкентского района</p>
								<a href='#' download>
									<DocumentsIconSvg width='18' height='22' />
									<span> скачать документ</span>
								</a>
							</div>
						</li>
					</ul>
				</div>
				<aside className={styles.objAside}>
					<p className={styles.objAsideType}>ИНВЕСТИЦИОННЫЙ ДОГОВОР</p>
					<p className={styles.objAsideStatus}>
						<CheckIconSvg width='17' height='22' />
						Объект выставлен на торги
					</p>
					{aucNumber ? (
						<>
							<div className={styles.objAsideAuc}>
								<h3>Аукцион {aucNumber}</h3>
								<ul>
									<li>
										<p>Аукцион открытого типа</p>
									</li>
									<li>
										<p>
											Аукцион начнется{' '}
											<span>
												27.03.2023 | 10:30 <span>TASH</span>{' '}
											</span>
										</p>
									</li>
									<li>
										<p>Для физических лиц</p>
									</li>
								</ul>
							</div>
							<Link to={AppRoute.Auc} className={styles.objAsideLink}>
								Страница Аукциона <span>{aucNumber}</span>
							</Link>
						</>
					) : (
						<h3>Аукцион не выставлен</h3>
					)}
				</aside>
			</div>
		</section>
	)
}
