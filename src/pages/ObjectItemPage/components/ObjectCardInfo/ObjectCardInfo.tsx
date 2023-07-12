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
			<div className='object-card__info-top'>
				<p className='object-card__unique-number'>
					<ObjCodeSvg width='47' height='34' />
					{code}
				</p>
			</div>
			<div className='object-card__info-main'>
				<div className='object-card__info-main-left'>
					<h2 className='subtitle'>{desc}</h2>
					<ul className='object-card__info-list'>
						<li>
							<p className='object-card__info-list-title'>Начальная стоимость:</p>
							<p className='object-card__info-list-content'>{priceRub} рублей</p>
						</li>
						<li>
							<p className='object-card__info-list-title'>Адрес Объекта:</p>
							<p className='object-card__info-list-content'>{addressRu}</p>
						</li>
						<li>
							<p className='object-card__info-list-title'>Застройщик Объекта:</p>
							<p className='object-card__info-list-content'>
								ООО «А-валид Эстейт»; ИНН: 998990099233
							</p>
						</li>
						<li>
							<p className='object-card__info-list-title'>Объект добавлен в базу:</p>
							<div className='object-card__info-list-content'>
								<p>Менеджером ООО «А-валид Эстейт» Валиевым И.Н.</p>
								<p>01 ноября 2022 года</p>
							</div>
						</li>
						<li>
							<p className='object-card__info-list-title'>Объект в Системе:</p>
							<p className='object-card__info-list-content'>
								Объект 219540-567-К ранее не выставлялся на торги в Системе
							</p>
						</li>
						<li>
							<p className='object-card__info-list-title'>Основание застройки:</p>
							<div>
								<p className='object-card__info-list-content'>
									Приказ № 22 349 от 04.09.2022 года Администрация Ташкентского района
								</p>
								<a href='#' className='object-card__info-list-download' download>
									<DocumentsIconSvg width='18' height='22' />
									<span> скачать документ</span>
								</a>
							</div>
						</li>
					</ul>
				</div>
				<aside className='object-card__aside'>
					<p className='object-card__aside-type'>ИНВЕСТИЦИОННЫЙ ДОГОВОР</p>
					<p className='object-card__aside-status'>
						<CheckIconSvg width='17' height='22' />
						Объект выставлен на торги
					</p>
					{aucNumber ? (
						<>
							<div className='object-card__aside-auction'>
								<h3>Аукцион {aucNumber}</h3>
								<ul>
									<li>
										<p>Аукцион открытого типа</p>
									</li>
									<li>
										<p>
											Аукцион начнется
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
							<Link to={AppRoute.Auc} className='object-card__aside-link'>
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
