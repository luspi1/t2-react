import { type FC } from 'react'
import { uid } from 'react-uid'
import { SliderNav } from 'src/components/Slider/SliderNav/SliderNav'
import { type DocScan } from 'src/types/objects'
import { DocOnCircleIconSVG } from 'src/UI/icons/DocOnCircleIconSVG'
import { Swiper, SwiperSlide } from 'swiper/react'

import styles from './index.module.scss'

type ObjectCardDocsProps = {
	scans?: DocScan[]
}
export const ObjectCardDocs: FC<ObjectCardDocsProps> = ({ scans }) => {
	return (
		<section className={styles.ObjCardDocs}>
			<div className={styles.ObjCardDocsTop}>
				<DocOnCircleIconSVG />
				<h2>Всего сканов документов: {scans?.length}</h2>
			</div>

			<Swiper className='nav-slider' spaceBetween={40} slidesPerView={7} grabCursor={true}>
				{scans?.map((scan) => (
					<SwiperSlide key={uid(scan)}>
						<img src={scan.url} alt='scan' />
					</SwiperSlide>
				))}
				<SliderNav />
			</Swiper>
		</section>
	)
}
