import { type FC } from 'react'
import { Button } from 'src/UI/Button'
import { LangSwitch } from 'src/components/LangSwitch/LangSwitch'
import styles from '../../index.module.scss'

export const MainAuthModal: FC = () => {
	return (
		<div>
			<LangSwitch className={styles.loginLangSwitch} />
			<h1>Вход на сайт</h1>
			<p className={styles.subtitle}>Авторизация/регистрация нового пользователя</p>

			<Button background='#66ACCC' width='100%' margin='0 0 30px 0'>
				авторизация через есиа
			</Button>
			<p>
				При регистрации пользователя через ЕСИА, АИС свяжется с системой государственных услуг и
				опознает Вас автоматически в случае, если Вы зарегистрированы и верифицированы на портале
				государственных услуг.
			</p>
			<p className={styles.borderBottom}>
				Вам не будет нужно вводить никакие данные пользователя. Изменить на нашем сайте Вы их тоже
				не сможете: все данные сайт получает из государственной базы данных.
			</p>
			<p>
				Если Вы не прошли регистрацию и верификацию на Госуслугах, воспользуйтесь методом
				регистрации вручную (это сложнее и требует специального подтверждения).
			</p>
			<Button background='#66ACCC' width='100%' margin='0 0 30px 0'>
				регистрация вручную
			</Button>

			<div className='auth-main__login'>
				<p className={styles.borderTop}>
					Если Вы не прошли регистрацию и верификацию на Госуслугах, воспользуйтесь методом
					регистрации вручную (это сложнее и требует специального подтверждения).
				</p>
				<Button background='#ffffff' color='#337390' width='100%' margin='0 0 30px 0'>
					войти на сайт
				</Button>
			</div>
		</div>
	)
}
