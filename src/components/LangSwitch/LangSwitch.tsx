import { type FC, type PropsWithChildren, useState } from 'react'
import uzbLang from '../../assets/img/uzb-lang.png'
import ruLang from '../../assets/img/ru-lang.png'
import styled from 'styled-components'
import cn from 'classnames'

type LangBtnProps = PropsWithChildren<{
	active?: boolean
	className?: string
}>

const LangBtn = styled.button<LangBtnProps>`
	display: block;
	position: relative;

	img {
		pointer-events: none;
	}

	&::before {
		content: '';
		position: absolute;
		left: 0;
		right: 0;
		top: 0;
		bottom: 0;
		width: 27px;
		height: 18px;
		border-radius: 4px;
		background-color: rgba(0, 0, 0, 0.5);
		display: ${({ active }) => (active === true ? 'none' : 'block')};
	}
`
export const LangSwitch: FC<LangBtnProps> = ({ className }) => {
	const [activeLang, setActiveLang] = useState<'ru' | 'uzb'>('ru')

	return (
		<div className={cn('main-menu__lang-switch', className)}>
			<LangBtn
				type='button'
				title='Oʻzbek'
				active={activeLang === 'uzb'}
				onClick={() => {
					setActiveLang('uzb')
				}}
			>
				<img src={uzbLang} alt='Переключить на узбекский' />
			</LangBtn>
			<LangBtn
				type='button'
				title='Русский'
				active={activeLang === 'ru'}
				onClick={() => {
					setActiveLang('ru')
				}}
			>
				<img src={ruLang} alt='Переключить на русский' />
			</LangBtn>
		</div>
	)
}
