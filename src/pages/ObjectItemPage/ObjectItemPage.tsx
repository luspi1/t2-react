import { type FC } from 'react'
import { Helmet } from 'react-helmet-async'
import { useParams } from 'react-router-dom'
import { ObjectCardBtns } from 'src/pages/ObjectItemPage/components/ObjectCardBtns/ObjectCardBtns'
import { ObjectCardDocs } from 'src/pages/ObjectItemPage/components/ObjectCardDocs/ObjectCardDocs'
import { ObjectCardImages } from 'src/pages/ObjectItemPage/components/ObjectCardImages/ObjectCardImages'
import { ObjectCardInfo } from 'src/pages/ObjectItemPage/components/ObjectCardInfo/ObjectCardInfo'
import { useGetObjectByIdQuery } from 'src/store/objects/objects.api'
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
				<ObjectCardDocs scans={currentObject.docScans} />
				<ObjectCardImages objImages={currentObject.objImages} />
				<ObjectCardBtns />
			</div>
		</Container>
	)
}
