import { type FC } from 'react'
import { MainTitle } from '../../UI/MainTitle'
import { Container } from '../../UI/Container'
import Select from 'react-select'
import { AuctionStatusOptions, CurrencyOptions } from './consts'

export const AuctionsPage: FC = () => {
	return (
		<Container margin='0 auto 35px auto'>
			<MainTitle padding='38px 0 32px 20px'>Аукционы</MainTitle>
			<div className='auctions__inner'>
				<div className='auctions__top'>
					<div className='auctions__search-wrapper'>
						<input
							className='auctions__search'
							type='text'
							placeholder='Найти аукцион по коду, названию, площади…'
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
					<div className='auctions__currency'>
						<Select
							classNamePrefix='custom-select'
							options={CurrencyOptions}
							placeholder='Валюта'
						/>
					</div>
					<div className='auctions__status'>
						<Select
							classNamePrefix='custom-select'
							options={AuctionStatusOptions}
							placeholder='Статус Аукциона'
						/>
					</div>
					<a href='new-auction.html' className='auctions__link-add-request'>
						Подать заявку на аукцион
					</a>
				</div>
				<div className='auctions__list'>
					<a href='auction-one.html' className='auctions__item'>
						<div className='auctions__col-1'>
							<p className='auctions__code'>604-408</p>
						</div>
						<div className='auctions__col-2'>
							<p className='auctions__condition _now'>Активный аукцион</p>
						</div>
						<div className='auctions__col-3'>
							<p className='auctions__date'>
								<span>22.04.2023</span> | <span>12:30</span> TASH
							</p>
							<p className='auctions__desc'>3-комнатная квартира в ЖК Азамат, 270 кв. м</p>
							<p className='auctions__owner'>ООО «А-валид Эстейт»; ИНН: 998990099233</p>
						</div>
						<div className='auctions__col-4'>
							<p className='auctions__price'>800 000 000 сом</p>
						</div>
					</a>
					<a href='auction-one.html' className='auctions__item'>
						<div className='auctions__col-1'>
							<p className='auctions__code'>604-407</p>
						</div>
						<div className='auctions__col-2'>
							<p className='auctions__condition _future'>Аукцион предстоит</p>
						</div>
						<div className='auctions__col-3'>
							<p className='auctions__date'>
								<span>17.04.2023</span> | <span>09:30</span> TASH
							</p>
							<p className='auctions__desc'>2-этажный жилой дом на озере</p>
							<p className='auctions__owner'>ООО «А-валид Эстейт»; ИНН: 998990099233</p>
						</div>
						<div className='auctions__col-4'>
							<p className='auctions__price'>800 000 000 сом</p>
						</div>
					</a>
					<a href='auction-one.html' className='auctions__item'>
						<div className='auctions__col-1'>
							<p className='auctions__code'>604-406</p>
						</div>
						<div className='auctions__col-2'>
							<p className='auctions__condition _future'>Аукцион предстоит</p>
						</div>
						<div className='auctions__col-3'>
							<p className='auctions__date'>
								<span>15.04.2023</span> | <span>11:30</span> TASH
							</p>
							<p className='auctions__desc'>Склад-рефрижератор на Центральном рынке</p>
							<p className='auctions__owner'>ООО «А-валид Эстейт»; ИНН: 998990099233</p>
						</div>
						<div className='auctions__col-4'>
							<p className='auctions__price'>800 000 000 сом</p>
						</div>
					</a>
					<a href='auction-one.html' className='auctions__item'>
						<div className='auctions__col-1'>
							<p className='auctions__code'>604-405</p>
						</div>
						<div className='auctions__col-2'>
							<p className='auctions__condition _complete'>Аукцион завершен</p>
						</div>
						<div className='auctions__col-3'>
							<p className='auctions__date'>
								<span>22.03.2023</span> | <span>12:30</span> TASH
							</p>
							<p className='auctions__desc'>Офисное помещение в ЖК Азамат</p>
							<p className='auctions__owner'>ООО «А-валид Эстейт»; ИНН: 998990099233</p>
						</div>
						<div className='auctions__col-4'>
							<p className='auctions__price'>800 000 000 сом</p>
						</div>
					</a>
					<a href='auction-one.html' className='auctions__item'>
						<div className='auctions__col-1'>
							<p className='auctions__code'>604-405</p>
						</div>
						<div className='auctions__col-2'>
							<p className='auctions__condition _cancel'>Аукцион отменен</p>
						</div>
						<div className='auctions__col-3'>
							<p className='auctions__date'>
								<span>22.04.2023</span> | <span>12:30</span> TASH
							</p>
							<p className='auctions__desc'>Офисное помещение в ЖК Азамат</p>
							<p className='auctions__owner'>ООО «А-валид Эстейт»; ИНН: 998990099233</p>
						</div>
						<div className='auctions__col-4'>
							<p className='auctions__price'>800 000 000 сом</p>
						</div>
					</a>
				</div>
			</div>
		</Container>
	)
}
