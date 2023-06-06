import cn from 'classnames'
import { type FC } from 'react'
import Dropzone from 'react-dropzone'
import { type Control, Controller } from 'react-hook-form'
import fileIcon from 'src/assets/img/doc-file.png'
import styles from './index.module.scss'

type FileInputProps = {
	name: string
	control: Control
	className?: string
	filesCount: number
}

export const FileInput: FC<FileInputProps> = ({ control, name, filesCount, className }) => {
	return (
		<Controller
			control={control}
			name={name}
			defaultValue={[]}
			render={({ field: { onChange, onBlur, value } }) => (
				<div className={cn(styles.mainDropzone, className)}>
					<h4>Перетяните изображение в это поле или</h4>
					<Dropzone onDrop={onChange} maxFiles={filesCount}>
						{({ getRootProps, getInputProps }) => (
							<div className={styles.innerDropzone} {...getRootProps()}>
								<button className={styles.dropzoneBtn} type='button'>
									Загрузите файл
								</button>
								<input {...getInputProps()} type='text' name={name} onBlur={onBlur} value={value} />
							</div>
						)}
					</Dropzone>
					<ul className={styles.filesList}>
						{value.map((f: File, i: number) => (
							<li key={i}>
								<img src={fileIcon} alt='file' />
							</li>
						))}
					</ul>
				</div>
			)}
		/>
	)
}
