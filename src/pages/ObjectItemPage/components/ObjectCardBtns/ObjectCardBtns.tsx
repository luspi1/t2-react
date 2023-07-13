import { type FC } from 'react'
import { Button } from 'src/UI/Button'
import { ObjLockIconSvg } from 'src/UI/icons/ObjLockIconSVG'
import { PromptIconSvg } from 'src/UI/icons/PromptIconSVG'

import styles from './index.module.scss'

export const ObjectCardBtns: FC = () => {
	return (
		<section className={styles.objCardBtns}>
			<Button
				disabledState
				background='#ffffff'
				color='#16B6C0'
				border='1px solid #16B6C0'
				margin='0 30px 0 0'
			>
				редактировать объект
				<ObjLockIconSvg />
			</Button>

			<p className={styles.objCardPrompt}>
				<PromptIconSvg />
				Редактирование Объекта, выставленного на торги, запрещено правилами системы
			</p>
		</section>
	)
}
