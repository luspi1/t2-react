import { type FC } from 'react'
import { Link } from 'react-router-dom'

type ObjectItemProps = {
	link: string
	objectCode: string
	objectSize: number
	objectPriceInRubles: number
	auctionObjectStatus: string
	objectInnerDescription: string
	objectAddressRU: string
	objectAuctionNumber: number
}
export const ObjectItem: FC<ObjectItemProps> = ({
	link,
	objectSize,
	objectCode,
	objectPriceInRubles,
	auctionObjectStatus,
	objectInnerDescription,
	objectAddressRU,
	objectAuctionNumber,
}) => {
	return (
		<li>
			<Link to={link} className='objects__item item'>
				<div className='item__col-1'>
					<p className='item__number'>{objectCode}</p>
					<p className='item__size'>{objectSize} кв. м</p>
					<p className='item__price'>{objectPriceInRubles} сом</p>
				</div>
				<div className='item__col-2'>
					<p className='item__type-status item__type-status_green'>{auctionObjectStatus}</p>
				</div>
				<div className='item__col-3'>
					<p className='item__info'>{objectInnerDescription}</p>
					<p className='item__address'>{objectAddressRU}</p>
				</div>
				<div className='item__status item__status_green'>
					<p>
						Аукцион <span>{objectAuctionNumber}</span>
					</p>
				</div>
			</Link>
		</li>
	)
}
