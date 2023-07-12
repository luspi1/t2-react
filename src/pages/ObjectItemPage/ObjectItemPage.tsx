import { type FC } from 'react'
import { Helmet } from 'react-helmet-async'
import { useParams } from 'react-router-dom'
import { ObjectCardInfo } from 'src/pages/ObjectItemPage/components/ObjectCardInfo/ObjectCardInfo'
import { useGetObjectByIdQuery } from 'src/store/objects/objects.api'

import { Button } from 'src/UI/Button'
import { Container } from 'src/UI/Container'

import { MainTitle } from 'src/UI/MainTitle'

import styles from './index.module.scss'

export const ObjectItemPage: FC = () => {
	const { objId } = useParams()

	const { data: currentObject, isError } = useGetObjectByIdQuery(Number(objId))

	if (isError || !currentObject) {
		return <h1>Объект не найден</h1>
	}

	return (
		<Container>
			<Helmet>
				<title>Карточка объекта</title>
			</Helmet>
			<MainTitle>Карточка объекта</MainTitle>
			<div className={styles.objCardInner}>
				<ObjectCardInfo
					code={currentObject.objectCode}
					desc={currentObject.objectInnerDescription}
					aucNumber={currentObject.objectAuctionNumber}
					addressRu={currentObject.objectAddressRU}
					priceRub={currentObject.objectPriceInRubles}
				/>
				<section className='object-card__btns'>
					<Button
						disabledState
						background='#ffffff'
						color='#16B6C0'
						border='1px solid #16B6C0'
						margin='0 30px 0 0'
					>
						редактировать объект
						<svg
							width='11'
							height='15'
							viewBox='0 0 11 15'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'
							style={{ marginLeft: '5px' }}
						>
							<path
								d='M8.40063 4.19995C8.40063 3.99995 8.40063 3.89995 8.40063 3.69995C8.40063 3.49995 8.4006 3.29998 8.3006 3.09998C8.0006 1.79998 7.00059 0.7 5.60059 0.5C5.50059 0.5 5.4006 0.500024 5.3006 0.400024C5.1006 0.400024 4.90062 0.400024 4.70062 0.400024C4.60062 0.400024 4.50063 0.4 4.40063 0.5C3.10063 0.7 2.00062 1.79998 1.70062 3.09998C1.70062 3.29998 1.60059 3.49995 1.60059 3.69995C1.60059 3.89995 1.60059 3.99995 1.60059 4.19995C1.60059 4.49995 1.60059 4.89995 1.60059 5.19995C2.20059 5.19995 2.80063 5.19995 3.40063 5.19995C3.40063 5.09995 3.40063 5.1 3.40063 5C3.40063 4.8 3.40063 4.60005 3.40063 4.30005C3.40063 4.10005 3.40063 3.89995 3.40063 3.69995V3.59998C3.40063 3.49998 3.40063 3.40005 3.40063 3.30005C3.50063 3.00005 3.60063 2.79998 3.90063 2.59998C4.00063 2.49998 4.10059 2.50002 4.10059 2.40002C4.20059 2.40002 4.2006 2.30005 4.3006 2.30005C4.5006 2.20005 4.70063 2.19995 4.90063 2.19995C5.10063 2.19995 5.30061 2.20005 5.50061 2.30005C5.60061 2.30005 5.60062 2.40002 5.70062 2.40002C5.80062 2.50002 5.90063 2.49998 5.90063 2.59998C6.10063 2.79998 6.30063 3.10005 6.40063 3.30005C6.40063 3.40005 6.40063 3.49998 6.40063 3.59998V3.69995C6.40063 3.89995 6.40063 4.10005 6.40063 4.30005C6.40063 4.50005 6.40063 4.7 6.40063 5C6.40063 5 6.40063 5.09995 6.40063 5.19995C7.00063 5.19995 7.60062 5.19995 8.20062 5.19995C8.30062 4.89995 8.40063 4.59995 8.40063 4.19995Z'
								fill='#A7CFD4'
							/>
							<path
								d='M10.0002 6.19995C10.0002 6.19995 9.90018 6.19995 10.0002 6.19995C6.70018 6.09995 3.5002 6.09998 0.200195 6.09998V6.19995C0.200195 7.29995 0.200195 8.4 0.200195 9.5C0.200195 9.9 0.200171 10.3 0.300171 10.6C0.800171 12.5 2.00018 13.8 4.00018 14.3C4.20018 14.4 4.50017 14.4 4.80017 14.4C5.00017 14.4 5.30018 14.4 5.50018 14.4H5.60016C6.30016 14.3 6.90018 14.2 7.50018 13.8C9.10018 12.9 10.0002 11.6 10.1002 9.69995C10.0002 8.59995 10.0002 7.39995 10.0002 6.19995ZM6.2002 10.5C6.3002 11 6.30021 11.4 6.40021 11.9C6.40021 11.9 6.40021 12 6.40021 12.1C5.50021 12.1 4.6002 12.1 3.7002 12.1C3.7002 11.9 3.70017 11.7 3.80017 11.4C3.80017 11.1 3.90021 10.7 3.90021 10.4C3.90021 10.4 3.90017 10.3 3.80017 10.2C3.00017 9.29995 3.30018 7.9 4.50018 7.5C5.20018 7.2 6.00021 7.49998 6.40021 8.09998C6.80021 8.69998 6.80017 9.59998 6.30017 10.1C6.20017 10.4 6.2002 10.4 6.2002 10.5Z'
								fill='#A7CFD4'
							/>
							<path
								d='M5.5002 11.3001C5.2002 11.3001 4.90017 11.3001 4.60017 11.3001C4.60017 11.0001 4.70021 10.8 4.70021 10.5C4.70021 10.5 4.70021 10.5001 4.70021 10.4001C4.80021 10.1001 4.7002 9.89998 4.5002 9.69998C4.1002 9.39998 4.1002 8.80003 4.5002 8.50003C4.8002 8.10003 5.40021 8.20003 5.70021 8.50003C6.00021 8.90003 6.00017 9.39998 5.60017 9.69998C5.40017 9.89998 5.30022 9.99998 5.40022 10.2C5.40022 10.7 5.4002 11.0001 5.5002 11.3001Z'
								fill='#A7CFD4'
							/>
						</svg>
					</Button>

					<p className='object-card__btns-prompt'>
						<svg
							width='35'
							height='34'
							viewBox='0 0 35 34'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'
						>
							<path
								d='M17.5996 34C26.9884 34 34.5996 26.3888 34.5996 17C34.5996 7.61116 26.9884 0 17.5996 0C8.21077 0 0.599609 7.61116 0.599609 17C0.599609 26.3888 8.21077 34 17.5996 34Z'
								fill='white'
							/>
							<path
								d='M21.9004 26.4C20.5004 28.8 17.4004 29.5 15.0004 28.1C14.3004 27.7 13.7003 27.1 13.3003 26.4L7.10033 16.1C5.70033 13.7 6.40034 10.7 8.80034 9.19995C9.60034 8.69995 10.5004 8.5 11.4004 8.5H23.7004C26.5004 8.5 28.7004 10.7 28.7004 13.5C28.7004 14.4 28.5004 15.3 28.0004 16.1L21.9004 26.4Z'
								stroke='#337390'
								strokeMiterlimit='10'
							/>
							<path
								d='M16.4304 18.6323C16.4304 18.3289 16.478 18.0603 16.5734 17.8263C16.6774 17.5923 16.803 17.3843 16.9504 17.2023C17.1064 17.0203 17.271 16.8513 17.4444 16.6953C17.6177 16.5393 17.778 16.3919 17.9254 16.2533C18.0814 16.1059 18.207 15.9543 18.3024 15.7983C18.4064 15.6423 18.4584 15.4689 18.4584 15.2783C18.4584 14.9663 18.3284 14.7149 18.0684 14.5243C17.817 14.3336 17.479 14.2383 17.0544 14.2383C16.647 14.2383 16.283 14.3249 15.9624 14.4983C15.6417 14.6629 15.3774 14.8969 15.1694 15.2003L13.5964 14.2773C13.943 13.7486 14.424 13.3283 15.0394 13.0163C15.6547 12.6956 16.4 12.5353 17.2754 12.5353C17.9254 12.5353 18.4974 12.6306 18.9914 12.8213C19.4854 13.0033 19.871 13.2719 20.1484 13.6273C20.4344 13.9826 20.5774 14.4203 20.5774 14.9403C20.5774 15.2783 20.5254 15.5773 20.4214 15.8373C20.3174 16.0973 20.183 16.3226 20.0184 16.5133C19.8537 16.7039 19.676 16.8816 19.4854 17.0463C19.3034 17.2109 19.13 17.3713 18.9654 17.5273C18.8007 17.6833 18.662 17.8479 18.5494 18.0213C18.4454 18.1946 18.3934 18.3983 18.3934 18.6323H16.4304ZM17.4184 21.8953C17.0544 21.8953 16.7554 21.7783 16.5214 21.5443C16.2874 21.3103 16.1704 21.0329 16.1704 20.7123C16.1704 20.3829 16.2874 20.1099 16.5214 19.8933C16.7554 19.6679 17.0544 19.5553 17.4184 19.5553C17.791 19.5553 18.09 19.6679 18.3154 19.8933C18.5494 20.1099 18.6664 20.3829 18.6664 20.7123C18.6664 21.0329 18.5494 21.3103 18.3154 21.5443C18.09 21.7783 17.791 21.8953 17.4184 21.8953Z'
								fill='#337390'
							/>
						</svg>
						Редактирование Объекта, выставленного на торги, запрещено правилами системы
					</p>
				</section>
			</div>
		</Container>
	)
}
