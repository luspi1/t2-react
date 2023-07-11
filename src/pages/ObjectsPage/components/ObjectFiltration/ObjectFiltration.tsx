import React, { type FC } from 'react'

import { Link } from 'react-router-dom'
import Select from 'react-select'
import { AppRoute } from 'src/helpers/consts'
import { ObjectsOnAucOptions, ObjectsStatusOptions } from 'src/pages/ObjectsPage/consts'
import { type ObjFiltrationParams } from 'src/types/objects'
import { type SelOption } from 'src/types/select'

type ObjectFiltrationProps = {
	setFiltrationParams: React.Dispatch<React.SetStateAction<ObjFiltrationParams>>
	filtrationParams: ObjFiltrationParams
}

export const ObjectFiltration: FC<ObjectFiltrationProps> = ({
	setFiltrationParams,
	filtrationParams,
}) => {
	const handleFilterSelect = (option: SelOption | null) => {
		setFiltrationParams({
			...filtrationParams,
			status: option?.value ?? '',
		})
	}
	const handleAucSelect = (option: SelOption | null) => {
		setFiltrationParams({
			...filtrationParams,
			auc: option?.value ?? '',
		})
	}

	return (
		<div className='objects__select-row'>
			<div className='objects__search-wrapper'>
				<input
					className='objects__search objects-all__search'
					type='text'
					placeholder='Найти объект по коду, названию, адресу или стоимости'
					onChange={(e) =>
						setFiltrationParams({
							...filtrationParams,
							search: e.target.value,
						})
					}
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
					onChange={handleFilterSelect}
				/>
			</div>
			<div className='objects__auction'>
				<Select
					classNamePrefix='custom-select'
					options={ObjectsOnAucOptions}
					placeholder='Все объекты'
					onChange={handleAucSelect}
				/>
			</div>
			<Link to={AppRoute.ObjCreate} className='objects__btn-add'>
				Добавить объект
			</Link>
		</div>
	)
}
