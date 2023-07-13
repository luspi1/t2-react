import cn from 'classnames'
import { type FC } from 'react'
import { uid } from 'react-uid'
import { SliderNav } from 'src/components/Slider/SliderNav/SliderNav'
import { type ObjImg } from 'src/types/objects'
import { DocOnCircleIconSVG } from 'src/UI/icons/DocOnCircleIconSVG'
import { Swiper, SwiperSlide } from 'swiper/react'

import styles from './index.module.scss'

type ObjectCardImagesProps = {
	objImages?: ObjImg[]
}
export const ObjectCardImages: FC<ObjectCardImagesProps> = ({ objImages }) => {
	return (
		<section className={styles.objCardImages}>
			<div className={styles.objCardImagesTop}>
				<DocOnCircleIconSVG />
				<h2>Всего изображений: {objImages?.length}</h2>
			</div>

			<Swiper
				className={cn('nav-slider', styles.objCardSlider)}
				spaceBetween={40}
				slidesPerView={7}
				grabCursor={true}
				autoHeight={true}
			>
				{objImages?.map((img) => (
					<SwiperSlide key={uid(img)}>
						<img src={img.url} alt='object image' />
					</SwiperSlide>
				))}
				<SliderNav />
			</Swiper>
		</section>
	)
}
