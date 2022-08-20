import { FC } from 'react'
import { Box, Container, Typography } from '@mui/material'
import { CustomDivider } from '../CustomDivider'


interface Props {
	
}
export const AboutMe: FC<Props> = () => {

	return (
		<Box
			id='AboutMe'
			component='section'
			sx={{
				backgroundColor: 'background.paper',
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
				<CustomDivider description='Hola a todos' label='Un poco de mi' />

				<Typography
					fontSize='large'
					color='textSecondary'
				>
					Soy Ingeniero en Tecnologías de la Información y Comunicaciones, me apasiona la programación, los animales y la mitología Lovecraftiana. Mis autores favoritos son Edgar Allan Poe, Howard Phillips Lovecraft, Isaac Asimov y Michel Houellebecq.
				</Typography>
			</Container>
		</Box>
	)
}