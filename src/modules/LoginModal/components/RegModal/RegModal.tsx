import React, { type FC } from 'react'

import { LangSwitch } from 'src/components/LangSwitch/LangSwitch'

import styles from './index.module.scss'
import mainStyles from 'src/modules/LoginModal/index.module.scss'
import { MainInput } from 'src/UI/MainInput/MainInput'

export const RegModal: FC = () => {
	return (
		<div className={styles.regModal}>
			<LangSwitch className={mainStyles.loginLangSwitch} />
			<h1>САМОСТОЯТЕЛЬНАЯ РЕГИСТРАЦИЯ</h1>
			<p>нового пользователя</p>

			<form className={mainStyles.borderBottom}>
				<p>Фамилия</p>
				<MainInput type='text' placeholder='Иванов' />
			</form>
		</div>
	)
}
