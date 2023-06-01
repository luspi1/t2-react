import cn from 'classnames'
import React, { type FC, type HTMLAttributes, type ReactNode } from 'react'
import { useController, type UseControllerProps } from 'react-hook-form'
import MaskedInput, { type Mask } from 'react-text-mask'

import styles from './index.module.scss'

type customControlledFieldProps = {
	mask?: Mask | ((value: string) => Mask)
	svg?: ReactNode
	type: string
}

type ControlledFieldProps = customControlledFieldProps & HTMLAttributes<HTMLInputElement>

export const ControlledField: FC<UseControllerProps & ControlledFieldProps> = (props) => {
	const { field } = useController(props)
	return (
		<div className={styles.fieldWrapper}>
			{props.svg}
			<MaskedInput
				{...props}
				{...field}
				type={props.type}
				className={cn(styles.controlledField, props.className, {
					[styles.isSvg]: props.svg,
				})}
				mask={props.mask ? props.mask : false}
			/>
		</div>
	)
}
