import { type FC } from 'react'
import { generatePath, Link } from 'react-router-dom'
import { AppRoute, ObjectsStatuses } from 'src/helpers/consts'
import { type ObjectItemStatus } from 'src/types/objects'
import { AucStatus } from 'src/UI/AucStatus'
import styles from './index.module.scss'
import { Typography } from 'src/UI/Typography'

type ObjectItemProps = {
	id: number
	objectCode: string
	objectSize: number
	objectPriceInRubles: number
	auctionObjectStatus: ObjectItemStatus
	objectInnerDescription: string
	objectAddressRU: string
	objectAuctionNumber: string | null
}

export const ObjectItem: FC<ObjectItemProps> = ({
	id,
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
			<Link
				to={generatePath(AppRoute.ObjItem, { objId: id.toString() })}
				className='objects__item item'
			>
				<div className='item__col-1'>
					<p className='item__number'>{objectCode}</p>
					<p className='item__size'>{objectSize} кв. м</p>
					<p className='item__price'>{objectPriceInRubles} сом</p>
				</div>
				<div className='item__col-2'>
					<Typography
						weight='500'
						size='12px'
						lineHeight='15px'
						color={
							auctionObjectStatus.statusProperty === ObjectsStatuses.work ? '#1dab7f' : '#fc611f'
						}
					>
						{auctionObjectStatus.statusContent}
					</Typography>
				</div>
				<div className='item__col-3'>
					<p className='item__info'>{objectInnerDescription}</p>
					<p className='item__address'>{objectAddressRU}</p>
				</div>

				{objectAuctionNumber !== null ? (
					<AucStatus green>
						<p>
							Аукцион <span className={styles.boldSpan}>{objectAuctionNumber}</span>
						</p>
					</AucStatus>
				) : (
					<AucStatus gray>Не выставлен</AucStatus>
				)}
			</Link>
		</li>
	)
}
