import { NextArrowIconSvg } from 'src/UI/icons/NextArrowIconSVG'
import { PrevArrowIconSvg } from 'src/UI/icons/PrevArrowIconSVG'
import { useSwiper } from 'swiper/react'

import styles from './index.module.scss'

export const SliderNav = () => {
	const swiper = useSwiper()
	return (
		<div className={styles.sliderNav}>
			<button onClick={() => swiper.slidePrev()}>
				<PrevArrowIconSvg />
			</button>
			<button onClick={() => swiper.slideNext()}>
				<NextArrowIconSvg />
			</button>
		</div>
	)
}
