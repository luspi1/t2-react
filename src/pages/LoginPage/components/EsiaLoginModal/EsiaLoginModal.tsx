import { type FC } from 'react'
import { Button } from 'src/UI/Button'

export const EsiaLoginModal: FC = () => {
	return (
		<div>
			<h1>АВТОРИЗАЦИЯ ЧЕРЕЗ ЕСИА</h1>
			<form className='auth-authorization__form form'>
				<div className='form__input-wrapper'>
					<p>Учетная запись</p>
					<input type='email' name='userLogin' placeholder='konstantin@konstantin.com' />
				</div>
				<p>
					При регистрации пользователя через ЕСИА, АИС свяжется с системой государственных услуг и
					опознает Вас автомотически в случае, если Вы зарегистрированы и верифицированы на портале
					государственных услуг.
				</p>
				<p>
					Вам не будет нужно вводить никакие данные пользователя. Изменить на нашем сайте Вы их тоже
					не сможете: все данные сайт получает из государственной базы данных.
				</p>
				<Button type='submit'>авторизоваться</Button>
			</form>
		</div>
	)
}
