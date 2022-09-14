import { FC } from 'react'
import { Box, Button, Container, Typography } from '@mui/material'
/*  */
import { Avatar } from './Avatar'


interface Props {
	
}
export const MainPresentation: FC<Props> = () => {

	return (
		<Box
			component='section'
			sx={{
				minHeight: '680px',
				height: '100vh',
				position: 'relative',
				pt: { xs: '62px', md: '0' }
			}}
		>
			<Container sx={{ height: '100%' }} >
				<Box
					display='flex'
					justifyContent='center'
					alignItems='center'
					flexDirection={{ xs: 'column-reverse', md: 'row' }}
					sx={{
						height: '100%',
						width: '100%'
					}}
				>
					<Box
						display='flex'
						justifyContent='center'
						alignItems='center'
						flexDirection='column'
						sx={{
							height: '100%',
							width: '100%',
							textTransform: 'uppercase'
						}}
					>
						<Box
							display='flex'
							flexDirection='column'
							sx={{
								width: '100%'
							}}
						>
							<Typography color='primary' fontWeight='500' marginBottom={{ xs: 1, md: 2 }} >Hola, soy</Typography>
							<Typography 
								fontFamily='Orbitron' 
								color='textPrimary' 
								fontWeight='700' 
								component='h1' 
								variant='h2' 
								marginBottom={{ xs: 1, md: 2 }}
								data-testid='name'
							>
								Aureliano Torres Sandoval
							</Typography>
							<Typography color='textSecondary' >FrontEnd Developer & BackEnd Developer</Typography>
							<Box
								sx={{
									width: '100%',
									mt: { xs: 5 },
									mb: { xs: 5, md: 0 }
								}}
							>
								<Button href='https://www.linkedin.com/in/aure-sand-49a77b1b7/' variant='outlined' color='primary' size='large' target='_blank'
									rel='noreferrer noopener'
								>
									Contactame
								</Button>
							</Box>
						</Box>
					</Box>

					<Box
						display='flex'
						justifyContent={{ xs: 'center', md: 'flex-end' }}
						alignItems='center'
						sx={{
							height: '100%',
							width: '100%',
							position: 'relative'
						}}
					>
						<Avatar />
					</Box>
				</Box>
			</Container>
		</Box>
	)
}