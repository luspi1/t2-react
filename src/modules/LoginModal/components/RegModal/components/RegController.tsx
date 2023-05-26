import { type FC } from 'react'
import { Button } from 'src/UI/Button'

import styles from './index.module.scss'
import { PrevIconSvg } from 'src/UI/icons/PrevIconSVG'

type RegControllerProps = {
	step: number
	handleDecrementStep: () => void
	handleIncrementStep: () => void
}

export const RegController: FC<RegControllerProps> = ({
	step,
	handleDecrementStep,
	handleIncrementStep,
}) => {
	const btnsArr = new Array(4).fill(null)
	const renderBtn = (index: number) => {
		switch (step) {
			case index + 1:
				return (
					<Button width='125px' key={index} onClick={handleIncrementStep} type='button'>
						Далее
					</Button>
				)
			case index + 2:
				return (
					<Button key={index} onClick={handleDecrementStep} type='button' width='63px'>
						<PrevIconSvg />
					</Button>
				)
			default:
				return (
					<Button key={index} type='button' width='63px'>
						<span></span>
					</Button>
				)
		}
	}

	return <div className={styles.regController}>{btnsArr.map((el, i) => renderBtn(i))}</div>
}
