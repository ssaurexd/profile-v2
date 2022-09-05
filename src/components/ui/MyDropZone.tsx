import { FC } from 'react'
import Image from 'next/image'
import Dropzone, { DropzoneOptions } from 'react-dropzone'
import { Box, Typography } from '@mui/material'
import CloudUploadIcon from '@mui/icons-material/CloudUpload'


interface Props extends DropzoneOptions {
	hasError?: boolean,
	errorMsg?: string,
	imageUrl?: string
}
export const MyDropZone: FC<Props> = ({ onDrop, hasError, errorMsg, imageUrl, ...restProps }) => {

	return (
		<Dropzone
			{ ...restProps }
			onDrop={ onDrop }
		>
			{({ getRootProps, getInputProps, isDragActive }) => {

				const { refRoot, ...restRootProps } = getRootProps()

				return (
					<Box  >
						<Box 
							ref={ refRoot } 
							{ ...restRootProps } 
							sx={{
								minHeight: '100px',
								width: '100%',
								border: theme => `2px dashed ${ 
									isDragActive ? theme.palette.text.secondary : hasError ? theme.palette.error.main : theme.palette.action.focus
								}`,
								borderRadius: 1,
								display: 'flex',
								justifyContent: 'center',
								alignItems: 'center',
								transition: 'all ease 400ms',
								'&:focus': {
									border: theme => `2px dashed ${ theme.palette.text.disabled }`,
								}
							}}
						>
							<input {...getInputProps() } />
							{ hasError
								? (
									<Typography color='error' >
										{ errorMsg }
									</Typography>
								)
								: (
									<Typography >
										<CloudUploadIcon color='action' sx={{ fontSize: '3rem' }} />
									</Typography>
								)
							}
						</Box>
						<Box
							sx={{
								width: '100%',
								height: imageUrl ? '120px' : 'auto',
								position: 'relative',
								my: 2,
								borderRadius: 2,
								overflow: 'hidden'
							}}
						>
							{ imageUrl &&
								<Image 
									src={ imageUrl }
									layout='fill'
									alt='Image'
									objectFit='contain'
									priority={ true }
								/>
							}
						</Box>
					</Box>
				)
			}}
		</Dropzone>
	)
}