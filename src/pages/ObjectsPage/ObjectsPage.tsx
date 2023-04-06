import { type FC } from 'react'
import { MainTitle } from '../../UI/MainTitle'
import { Container } from '../../UI/Container'
import Select from 'react-select'
import { ObjectsOnAucOptions, ObjectsStatusOptions } from './consts'
import { ObjectItem } from './components/ObjectItem/ObjectItem'

export const ObjectsPage: FC = () => {
	return (
		<Container margin='0 auto 35px auto'>
			<MainTitle padding='38px 0 32px 20px'>Объекты</MainTitle>
			<div className='objects__inner'>
				<div className='objects__select-row'>
					<div className='objects__search-wrapper'>
						<input
							className='objects__search objects-all__search'
							type='text'
							placeholder='Найти объект по коду, названию, адресу или стоимости'
						/>
						<svg
							width='13'
							height='13'
							viewBox='0 0 13 13'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'
						>
							<path
								d='M5.8 11C3 10.9 0.900009 8.60001 1.00001 5.80001C1.10001 3.00001 3.40002 0.900009 6.20002 1.00001C9.00002 1.10001 11.1 3.40001 11 6.20001C11 7.50001 10.4 8.70001 9.50001 9.60001C8.50001 10.5 7.2 11 5.8 11Z'
								stroke='#A3A3A3'
							/>
							<path d='M10 10L12 12' stroke='#A3A3A3' strokeLinecap='round' />
						</svg>
					</div>
					<div className='objects__work'>
						<Select
							classNamePrefix='custom-select'
							options={ObjectsStatusOptions}
							placeholder='Все статусы'
						/>
					</div>
					<div className='objects__auction'>
						<Select
							classNamePrefix='custom-select'
							options={ObjectsOnAucOptions}
							placeholder='Все объекты'
						/>
					</div>
					<a href='new-object.html' className='objects__btn-add'>
						Добавить объект
					</a>
				</div>
				<ul className='objects__list'>
					<a href='object-card.html' className='objects__item item'>
						<div className='item__col-1'>
							<p className='item__number'>912045-765-Ж</p>
							<p className='item__size'>144,00 кв. м</p>
							<p className='item__price'>22 000 000 000 сом</p>
						</div>
						<div className='item__col-2'>
							<p className='item__type-status item__type-status_green'>Объект в работе</p>
						</div>
						<div className='item__col-3'>
							<p className='item__info'>3-комнатная квартира в ЖК Азамат</p>
							<p className='item__address'>Ташкент, ул. Безупречного понимания, д. 122, кв. 176</p>
						</div>
						<div className='item__status item__status_green'>
							<p>
								Аукцион <span>А-644-407</span>
							</p>
						</div>
					</a>
					<a href='object-card.html' className='objects__item item'>
						<div className='item__col-1'>
							<p className='item__number'>219540-567-К</p>
							<p className='item__size'>577,09 кв. м</p>
							<p className='item__price'>78 000 000 000 сом</p>
						</div>
						<div className='item__col-2'>
							<p className='item__type-status item__type-status_green'>Объект в работе</p>
						</div>
						<div className='item__col-3'>
							<p className='item__info'>Склад-рефрижератор на Центральном рынке</p>
							<p className='item__address'>Ташкент, ул. Безупречного понимания, д. 122</p>
						</div>
						<div className='item__status item__status_green'>
							<p>
								Аукцион <span>А-644-406</span>
							</p>
						</div>
					</a>
					<a href='object-card.html' className='objects__item item'>
						<div className='item__col-1'>
							<p className='item__number'>912045-764-Ж</p>
							<p className='item__size'>400,00 кв. м</p>
							<p className='item__price'>35 000 000 000 сом</p>
						</div>
						<div className='item__col-2'>
							<p className='item__type-status item__type-status_orange'>Ожидает</p>
						</div>
						<div className='item__col-3'>
							<p className='item__info'>2-этажный жилой дом на озере</p>
							<p className='item__address'>Ташкент, ул. Безупречного понимания, д. 122</p>
						</div>
						<div className='item__status item__status_blue'>
							<p>
								<span>Не выставлен</span>
							</p>
						</div>
					</a>
					<ObjectItem
						link='/'
						objectCode='dqw123'
						objectSize={123}
						objectPriceInRubles={333}
						auctionObjectStatus='В работе'
						objectInnerDescription='3-х этажный особняк'
						objectAddressRU='ул. Пушкина дом Колотушкина'
						objectAuctionNumber={123}
					/>
				</ul>
			</div>
		</Container>
	)
}
