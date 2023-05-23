import { type FC } from 'react'
import { Button } from 'src/UI/Button'
import { MainInput } from 'src/UI/MainInput/MainInput'

import styles from './index.module.scss'
import mainStyles from '../../index.module.scss'
import { MailIconSvg } from 'src/UI/icons/MailIconSVG'

export const EsiaLoginModal: FC = () => {
	return (
		<div className={styles.esiaModal}>
			<h1>АВТОРИЗАЦИЯ ЧЕРЕЗ ЕСИА</h1>
			<form action='#'>
				<p className={mainStyles.inputDesc}>Учетная запись</p>
				<MainInput
					svg={<MailIconSvg />}
					type='email'
					name='userEmail'
					placeholder='konstantin@konstantin.com'
				/>

				<p>
					При регистрации пользователя через ЕСИА, АИС свяжется с системой государственных услуг и
					опознает Вас автомотически в случае, если Вы зарегистрированы и верифицированы на портале
					государственных услуг.
				</p>
				<p>
					Вам не будет нужно вводить никакие данные пользователя. Изменить на нашем сайте Вы их тоже
					не сможете: все данные сайт получает из государственной базы данных.
				</p>
				<Button background='#ffffff' color='#337390' width='230px' margin='0 auto' type='submit'>
					авторизоваться
				</Button>
			</form>
		</div>
	)
}
