import { useCallback, useState } from 'react'
import { GetServerSideProps, NextPage } from 'next'
import dynamic from 'next/dynamic'
import { getSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import * as Yup from 'yup'
import { LoadingButton } from '@mui/lab'
import { Box, Paper, TextField, Typography } from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2'
import { Formik } from 'formik'
import { VariantType, useSnackbar } from 'notistack'
/*  */
import { IProject, IUser } from '../../../interfaces'
import { errorsMessages } from '../../../helpers'
import { api } from '../../../config'
/*  */
import { AdminLayout } from '../../../layouts'
import { MyDropZone } from '../../../components'
const RichEditor = dynamic( () => import( '../../../components/ui/editor/RichEditor' ), { ssr: false } )


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
				{({ values, errors, touched, handleBlur, handleChange, handleSubmit, setFieldValue, setFieldTouched }) => (
					<Box component='form' onSubmit={ handleSubmit } >
						<Grid container spacing={ 2 } >
							<Grid container xs={ 12 } md={ 8 } >
								<Grid xs={ 12 }>
									<Paper elevation={ 0 } 
										sx={{ width: '100%', p: 3 }} 
									>
										<TextField 
											label='Titulo'
											name='title'
											fullWidth
											margin='normal'
											error={ !!touched.title && !!errors.title }
											helperText={ !!touched.title && errors.title }
											value={ values.title }
											onBlur={ handleBlur }
											onChange={ handleChange }
										/>
										<TextField 
											label='Github'
											name='githubUrl'
											fullWidth
											margin='normal'
											value={ values.githubUrl }
											onBlur={ handleBlur }
											onChange={ handleChange }
										/>
										<TextField 
											label='Page'
											name='viewUrl'
											fullWidth
											margin='normal'
											value={ values.viewUrl }
											onBlur={ handleBlur }
											onChange={ handleChange }
										/>
									</Paper>
								</Grid>
								<Grid xs={ 12 }>
									<Paper elevation={ 0 } sx={{ width: '100%', p: 3 }} >
										<RichEditor 
											label='Descripción: '
											name='description'
											value={ values.description }
											onChage={ value => setFieldValue( 'description', value, true ) }
											onTouched={ () => setFieldTouched( 'description' ) }
											error={ !!touched.description && !!errors.description }
											errorText={ !!touched.description && errors.description }
										/>
									</Paper>
								</Grid>
								<Grid xs={ 12 }>
									<Paper elevation={ 0 } sx={{ width: '100%', p: 3 }} >
										<Typography my={ 1 } variant='body2' >Imagen: </Typography>
										<MyDropZone 
											imageUrl={ values.image }
											hasError={ !!errors.image }
											errorMsg={ errors.image } 
											onDrop={ ( files ) => onDrop( files, setFieldValue, values.image ) } 
										/>
									</Paper>
								</Grid>
							</Grid>

							{/*  */}
							<Grid xs={ 12 } md={ 4 } >
								<Grid >
									<Paper elevation={ 0 } sx={{ width: '100%', p: 3 }} >
										<TextField 
											label='ID'
											disabled
											fullWidth
											margin='normal'
											defaultValue={ values._id }
										/>
										<TextField 
											label='Fecha'
											disabled
											fullWidth
											margin='normal'
											defaultValue={ new Date( `${ values.createdAt }` ).toLocaleString() }
										/>
									</Paper>
								</Grid>
								<Grid>
									<Paper elevation={ 0 } sx={{ width: '100%', p: 3 }} >
										<LoadingButton
											variant='contained'
											color='primary'
											disableElevation
											type='submit'
											fullWidth
											loading={ isSubmitting }
										>
											Guardar proyecto
										</LoadingButton>
									</Paper>
								</Grid>
							</Grid>
						</Grid>
					</Box>
				)}
			</Formik>
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