import { FC } from 'react'
import { Box, Typography } from '@mui/material'
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord'


interface Props {
	label: string,
	description: string
}
export const CustomDivider: FC<Props> = ({ label, description }) => {

	return (
		<Box
			sx={{
				width: '100%',
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				flexDirection: 'column',
				mb: '90px'
			}}
		>
			<Box
				display='flex'
				flexWrap='nowrap'
				sx={{ width: '100%' }}
			>
				<Box
					sx={{ 
						width: '50%',
						display: 'flex',
						justifyContent: 'flex-end',
						flexWrap: 'nowrap',
						alignItems: 'center'
					}}
				>
					<Box 
						sx={{ 
							borderBottom: theme => `2px solid ${ theme.palette.text.primary }`,
							mb: '1px',
							width: { xs: '50%', md: '20%'}, mr: 2 
						}} 
					/>
				</Box>
				<Typography 
					fontWeight={ 600 } 
					variant='subtitle1' 
					color='textPrimary' 
					fontSize='large'
					display='flex'
					justifyContent='flex-start'
					sx={{
						width: '50%'
					}}
				>
					{ label }
					<Typography 
						component='span' 
						color='primary' 
						display='flex'
						justifyContent='space-evenly'
						alignItems='center'
					>
						<FiberManualRecordIcon fontSize='small' />
					</Typography>
				</Typography>
			</Box>
			<Typography textAlign='center' fontFamily='Orbitron' fontWeight={ 700 } component='h2' variant='h3' color='primary' textTransform='uppercase' >
				{ description }
			</Typography>
		</Box>
	)
}