import { FC } from 'react'
import { Box, Container, Typography } from '@mui/material'
import AccountTreeIcon from '@mui/icons-material/AccountTree'
import StorageIcon from '@mui/icons-material/Storage'
import IntegrationInstructionsIcon from '@mui/icons-material/IntegrationInstructions'
/*  */
import { CustomDivider } from '../CustomDivider'


interface Props {
	
}
export const WhatIDo: FC<Props> = () => {

	return (
		<Box
			sx={{
				py: '100px'
			}}
		>
			<Container
				sx={{
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center'
				}}
			>
				<CustomDivider label='Mi creatividad' description='Que es lo que hago' />
				<Typography
					sx={{
						maxWidth: '700px',
						mb: '100px'
					}}
					fontSize='large'
					color='textSecondary'
				>
					Estas son una de las tanta actividades que hago como desarrollador, desde continuar aprendiendo y manteniendome al margen de las actualizaciones de tecnologías como practicandolas.
				</Typography>
				<Box
					sx={{
						display: 'grid',
						gridTemplateColumns: 'repeat( auto-fit, minmax(200px, 1fr) )',
						gap: '20px'
					}}
				>
					<Box display='flex' flexDirection='column' justifyContent='center' alignItems='center' >
						<AccountTreeIcon color='primary' sx={{ fontSize: '70px' }} />
						<Typography color='textPrimary' textAlign='center' textTransform='uppercase' variant='subtitle1' fontSize='large' >
							Versionamiento
						</Typography>
						<Typography color='textSecondary' textAlign='center'  >
							Todos los proyecto con los que trabajo tienen un control se versionamiento, desde trabajar con Github como tambien con BitBucket.
						</Typography>
					</Box>
					<Box display='flex' flexDirection='column' justifyContent='center' alignItems='center' >
						<StorageIcon color='primary' sx={{ fontSize: '70px' }} />
						<Typography color='textPrimary' textTransform='uppercase' variant='subtitle1' fontSize='large' >Base de datos</Typography>
						<Typography color='textSecondary' textAlign='center'  >
							Limpiar, administrar y hacer consultas avanzadas en bases de datos no relacionales como consultas basicas en bases de datos relacionales.
						</Typography>
					</Box>
					<Box display='flex' flexDirection='column' justifyContent='center' alignItems='center' >
						<IntegrationInstructionsIcon color='primary' sx={{ fontSize: '70px' }} />
						<Typography color='textPrimary' textTransform='uppercase' variant='subtitle1' fontSize='large' >Desarrollo</Typography>
						<Typography color='textSecondary' textAlign='center' >
							Como Fullstack, desarrollo tanto APIs como backend developer, como tambien maquetar toda una plataforma web como Fronend developer.
						</Typography>
					</Box>
				</Box>
			</Container>
		</Box>
	)
}