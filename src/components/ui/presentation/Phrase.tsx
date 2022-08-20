import { FC } from 'react'
import { Box, Container, Typography } from '@mui/material'


interface Props {
	
}
const Phrase: FC<Props> = () => {

	return (
		<Box
			component='section'
			sx={{
				py: '100px'
			}}
		>
			<Container  >
				<Box display='flex' flexDirection='column' justifyContent='center' width='100%' alignItems='center' 
					sx={{
						position: 'relative'
					}}
				>    
					<Typography
						maxWidth='sm'
						color='textSecondary'
						fontStyle='italic'
						textAlign='center'
						fontSize='large'
					>
						“ La emoción más antigua y más intensa de la humanidad es el miedo, y el más antiguo y más intenso de los miedos es el miedo a lo desconocido”.
					</Typography>
					<Typography 
						maxWidth='sm'
						color='textSecondary'
						textAlign='center'
						fontSize='large'
						variant='subtitle1'
						fontWeight={600}
						sx={{
							color: theme => theme.palette.primary.main,
							my: 4
						}}
					>
						-- H.P. Lovecraft 
					</Typography>
				</Box>
			</Container>
		</Box>
	)
}

export default Phrase