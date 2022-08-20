import { FC, useState } from 'react'
import { Box, Container } from '@mui/material'
import LoadingButton from '@mui/lab/LoadingButton'
/*  */
import { IProject } from '../../../interfaces'
/*  */
import { CustomDivider } from '../CustomDivider'
import { ProjectCard } from './ProjectCard'
import { api } from '../../../config'


interface Props {
	lastesProjects: IProject[]
}
export const ProjectsList: FC<Props> = ({ lastesProjects }) => {

	const [ projects, setProjects ] = useState<IProject[]>( [] )
	const [ isLoading, setIsLoading ] = useState( false )
	const [ hasMore, setHasMore ] = useState( true )
	const [ filters, setFilters ] = useState({ limit: 3, page: 1 })

	/* functions */
	const loadMoreProjects = async (  ) => {
		
		setIsLoading( true )
		const { data: { data: moreProjects } } = await api.get<{ data: IProject[] }>( '/project', {
			params: filters
		})

		if( moreProjects.length === 0 || moreProjects.length < 3 ) setHasMore( false )
		
		setFilters({ ...filters, page: filters.page + 1 })
		setProjects( pre => [ ...pre, ...moreProjects ])
		setIsLoading( false )
	}

	return (
		<Box
			component='section'
			sx={{
				backgroundColor: 'background.paper',
				py: '100px'
			}}
		>
			<Container>
				<CustomDivider label='Portafolio' description='Mis proyectos' />
				<Box
					sx={{ 
						justifyItems: 'center',
						width: '100%',
						display: 'grid',
						gridTemplateColumns: 'repeat( auto-fit, minmax( 345px, 1fr ) )',
						gap: { xs: '40px', md: '20px' }
					}}
				>
					{ lastesProjects.map( p => <ProjectCard key={ p._id } project={ p } /> ) }
					{ projects.map( p => <ProjectCard key={ p._id } project={ p } /> ) }
				</Box>
				<Box
					sx={{
						justifyContent: 'center',
						width: '100%',
						display: 'flex',
						p: 5
					}}
				>
					{ hasMore && 
						<LoadingButton 
							variant='text'
							color='primary'
							loading={ isLoading }
							onClick={ loadMoreProjects }
						>
							Ver más
						</LoadingButton>
					}
				</Box>
			</Container>
		</Box>
	)
}