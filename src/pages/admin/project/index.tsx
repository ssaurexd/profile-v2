import { useEffect, useState } from 'react'
import { GetServerSideProps, NextPage } from 'next'
import { getSession } from 'next-auth/react'
import { Box, IconButton, Paper } from '@mui/material'
import { DataGrid, GridColDef, GridRowsProp } from '@mui/x-data-grid'
import EditIcon from '@mui/icons-material/Edit'
/*  */
import { IProject, IUser } from '../../../interfaces'
import { AdminLayout } from '../../../layouts'
import { api } from '../../../config'
import Image from 'next/image'
import Link from 'next/link'
 
const columns: GridColDef[] = [
	{ 
		field: 'edit', 
		headerName: '', 
		width: 50, 
		renderCell({ value }) {

			return (
				<Link href={`/admin/project/${ value }`} passHref >
					<IconButton>
						<EditIcon />
					</IconButton>
				</Link>
			)
		}
	},
	{ field: '_id', headerName: 'ID', width: 200 },
	{ 
		field: 'image', 
		headerName: 'Imagen', 
		width: 100,
		renderCell({ value }) {
			
			return (
				<Box
					sx={{
						position: 'relative',
						width: '100%',
						height: '100%'
					}}
				>
					<Image 
						src={ value }
						alt='Imagen'
						layout='fill'
						objectFit='contain'
					/>
				</Box>
			)
		}, 
	},
	{ field: 'title', headerName: 'Titulo', width: 200 },
	{ field: 'description', headerName: 'Descripción', width: 400 },
	{ field: 'viewUrl', headerName: 'Pagina', width: 200 },
	{ field: 'githubUrl', headerName: 'Github', width: 200 },
	{ 
		field: 'createdAt', 
		headerName: 'Fecha', 
		width: 170,
		renderCell({ value }) {
			
			const date = new Date( value )

			return date.toLocaleString()
		}
	}
]
interface Props {
	
}
const ListProjects: NextPage<Props> = ({}) => {

	const [ isLoading, setIsLoading ] = useState( true )
	const [ rows, setRows ] = useState<GridRowsProp>( [] )

	/* functions */
	const getData = async ( signal: AbortSignal ) => {

		const { data: { data } } = await api.get<{ data: IProject[] }>( '/project', { signal } )
		
		setIsLoading( false )
		setRows([
			...data.map( project => ({
				id: project._id,
				edit: project._id,
				...project
			}))
		])
	}

	/* effects */
	useEffect( () => { 

		const controller = new AbortController()

		getData( controller.signal ) 

		return () => controller.abort()
	}, [ ])

	return (
		<AdminLayout>
			<Paper elevation={ 0 } sx={{ width: '100%' }}>
				<DataGrid
					loading={ isLoading }
					rows={ rows }
					columns={ columns }
					pageSize={ 15 }
					autoHeight
					rowsPerPageOptions={[ 15 ]}
					disableSelectionOnClick
					experimentalFeatures={{ newEditingApi: true }}
				/>
			</Paper>
		</AdminLayout>
	)
}

export const getServerSideProps: GetServerSideProps = async ({ req, query }) => {

	const session = await getSession({ req })
	const admitedRoles = [ 'admin' ]
	const { p = '/' } = query

	if( !session ) {

		return {
			redirect: {
				destination: `/?p=${ p }`,
				permanent: false
			}
		}
	}

	const user = session.user as IUser
	
	if( !admitedRoles.includes( user.role ) ) {

		return {
			redirect: {
				destination: '/',
				permanent: false
			}
		}
	}

	return {
		props: {
			
		}
	}
}

export default ListProjects