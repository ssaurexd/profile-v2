import { useCallback, useState } from 'react'
import { GetServerSideProps, NextPage } from 'next'
import { getSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import * as Yup from 'yup'
import { LoadingButton } from '@mui/lab'
import { Box, Paper, TextField } from '@mui/material'
import { Formik } from 'formik'
import { VariantType, useSnackbar } from 'notistack'
/*  */
import { IProject, IUser } from '../../../interfaces'
import { errorsMessages } from '../../../helpers'
/*  */
import { AdminLayout } from '../../../layouts'
import { api } from '../../../config'
import { MyDropZone } from '../../../components'


interface Props {
}
const ProjectIDPage: NextPage<Props> = ({}) => {

	const [ isSubmitting, setIsSubmitting ] = useState( false )
	const [ project ] = useState<IProject>({
		_id: '',
		description: '',
		image: '',
		title: '',
		githubUrl: '',
		viewUrl: '',
		createdAt: new Date()
	})
	const { enqueueSnackbar } = useSnackbar()
	const router = useRouter()
	
	/* functions */
	const onDrop = useCallback( async ( acceptedFiles: File[], setImgUrl: ( field: string, value: string ) => void, img?: string ) => {

		const formData = new FormData()

		try {
			
			formData.append( 'file', acceptedFiles[0] )

			if( img ) {

				await api.delete<{ msg: string }>( '/project/upload', {
					params: {
						image: img
					}
				}) 
			}

			const { data } = await api.post<{ msg: string }>( '/project/upload', formData ) 

			setImgUrl( 'image', data.msg )
		} catch ( error ) {
			
			console.log("🚀 ~ file: [id].tsx ~ line 34 ~ onDrop ~ error", error)
		}
	}, [])

	const onSubmit = async ( values: typeof project ) => {
		
		setIsSubmitting( true )
		try {
			
			const { data: { msg } } = await api.post<{ msg: string, project: IProject }>( `/project`, values )

			onOpenSnackbar( 'success', msg )
			setIsSubmitting( false )
			router.push( '/admin/project' )
		} catch ( error: any ) {
			
			onOpenSnackbar( 'error', error.response.data.msg )
			setIsSubmitting( false )
		}
	}

	const onOpenSnackbar = ( variant: VariantType, msg: string ) => {

		enqueueSnackbar( msg, { variant } )
	}
	
	return (
		<AdminLayout>
			<Paper elevation={ 0 } sx={{ width: '100%', p: 3 }} >
				<Formik
					initialValues={{ ...project }}
					validationSchema={ Yup.object({
						title: Yup.string().trim()
						  	.required( errorsMessages['FIELD_REQUIRED'] ),
						description: Yup.string().trim()
							.required( errorsMessages['FIELD_REQUIRED'] ),
						image: Yup.string().trim()
							.required( errorsMessages['FIELD_REQUIRED'] )
					})}
					onSubmit={ ( values ) => onSubmit( values ) }
				>
					{({ values, errors, touched, handleBlur, handleChange, handleSubmit, setFieldValue }) => (
						<Box component='form' onSubmit={ handleSubmit } >
							<Box 
								sx={{
									display: 'grid',
									gridTemplateColumns: ' repeat( auto-fit, minmax( 400px, 1fr ) ) ',
									gap: 5
								}}
							>
								<TextField 
									label='ID'
									disabled
									fullWidth
									margin='none'
									defaultValue={ values._id }
								/>
								<TextField 
									label='Fecha'
									disabled
									fullWidth
									margin='none'
									defaultValue={ new Date( `${ values.createdAt }` ).toLocaleString() }
								/>
								<TextField 
									label='Titulo'
									name='title'
									fullWidth
									margin='none'
									error={ !!errors.title }
									helperText={ !!touched.title && errors.title }
									value={ values.title }
									onBlur={ handleBlur }
									onChange={ handleChange }
								/>
								<TextField 
									label='Github'
									name='githubUrl'
									fullWidth
									margin='none'
									error={ !!errors.githubUrl }
									helperText={ !!touched.githubUrl && errors.githubUrl }
									value={ values.githubUrl }
									onBlur={ handleBlur }
									onChange={ handleChange }
								/>
								<TextField 
									label='Page'
									name='viewUrl'
									fullWidth
									margin='none'
									error={ !!errors.viewUrl }
									helperText={ !!touched.viewUrl && errors.viewUrl }
									value={ values.viewUrl }
									onBlur={ handleBlur }
									onChange={ handleChange }
								/>
							</Box>
							<TextField 
								sx={{ mt: 5 }}
								label='Descripción'
								name='description'
								fullWidth
								margin='none'
								multiline
								error={ !!errors.description }
								helperText={ !!touched.description && errors.description }
								value={ values.description }
								onBlur={ handleBlur }
								onChange={ handleChange }
							/>
							<MyDropZone 
								imageUrl={ values.image }
								hasError={ !!errors.image }
								errorMsg={ errors.image } 
								onDrop={ ( files ) => onDrop( files, setFieldValue, values.image ) } 
							/>
							<Box >
								<LoadingButton
									variant='contained'
									color='primary'
									disableElevation
									type='submit'
									fullWidth
									loading={ isSubmitting }
								>
									Crear proyecto
								</LoadingButton>
							</Box>
						</Box>
					)}
				</Formik>
			</Paper>
		</AdminLayout>
	)
}

export const getServerSideProps: GetServerSideProps = async ({ req, query }) => {
	
	const session = await getSession({ req })
	const admitedRoles = [ 'admin' ]
	const { p = '/' } = query

	if( !session ) return {
		redirect: {
			destination: `/?p=${ p }`,
			permanent: false
		}
	}

	const user = session.user as IUser
	
	if( !admitedRoles.includes( user.role ) ) return {
		redirect: {
			destination: '/',
			permanent: false
		}
	}

	return {
		props: {}
	}
}

export default ProjectIDPage