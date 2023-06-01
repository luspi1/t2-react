import { type FC } from 'react'
import Dropzone from 'react-dropzone'
import { type Control, Controller } from 'react-hook-form'

type FileInputProps = {
	name: string
	control: Control
}
export const FileInput: FC<FileInputProps> = ({ control, name }) => {
	return (
		<Controller
			control={control}
			name={name}
			defaultValue={[]}
			render={({ field }) => (
				<>
					<Dropzone onDrop={field.onChange}>
						{({ getRootProps, getInputProps }) => (
							<div {...getRootProps()}>
								<input
									{...getInputProps()}
									type='text'
									name={name}
									onBlur={field.onBlur}
									value={field.value}
								/>
								<p>Drag drop files</p>
							</div>
						)}
					</Dropzone>
					<ul>
						{field.value.map((f: File, i: number) => (
							<p key={i}>{f.name}</p>
						))}
					</ul>
				</>
			)}
		/>
	)
}
