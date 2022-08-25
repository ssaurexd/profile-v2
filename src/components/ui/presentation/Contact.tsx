import { FC } from 'react'
import { Box, Button, Container, Typography } from '@mui/material'


interface Props {
	
}
export const Contact: FC<Props> = () => {

	return (
		<Box
			component='section'
			sx={{
				backgroundColor: 'background.paper',
				py: '100px'
			}}
		>
			<Container sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }} >
					<Typography
						textAlign='center' 
						color='textSecondary' 
						variant='h6' 
						fontWeight={ 400 }
					>
						¿Tienes algún
					</Typography>
					<Typography 
						textAlign='center' 
						color='textSecondary' 
						variant='h4' 
						textTransform='uppercase' 
						fontWeight={ 400 }
						sx={{ mb: 5 }}
					>
						Proyecto en mente?
					</Typography>
					<Button variant='outlined' target='_blank' href='https://www.linkedin.com/in/aure-sand-49a77b1b7/' rel='noreferrer noopener'>Contactame</Button>
			</Container>
		</Box>
	)
}