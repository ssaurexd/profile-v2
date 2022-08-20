import { Box, Container, Typography } from '@mui/material'
import Image from 'next/image'
import { FC } from 'react'
/*  */
import { CustomDivider } from '../CustomDivider'


const imgContainerStyle = {
    width: '100px',
    height: '100px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
}
const imageStyle = { 
	position: 'relative', 
	width: '80px', 
	height: '80px'
}
interface Props {
	
}
export const Skills: FC<Props> = () => {

	return (
		<Box
			component='section'
			sx={{
				py: '100px'
			}}
		>
			<Container>
				<CustomDivider label='Conocimientos' description='Mis Habilidades' />
				<Box
					sx={{
						display: 'grid',
						gridTemplateColumns: 'repeat( auto-fit, minmax(100px, 1fr) )',
						gap: '20px',
						justifyItems: 'center'
					}}
				>
					<Box sx={ imgContainerStyle }>    
						<Box sx={ imageStyle } >
							<Image 
								src='/images/typescript_144.svg'
								alt='CSS3'
								layout='fill'
								objectFit='contain'
							/>
						</Box>
						<Typography variant='caption' fontSize='large' color='textSecondary' textAlign='center'>Typescript</Typography>
					</Box>
					<Box sx={ imgContainerStyle }>    
						<Box sx={ imageStyle } >
							<Image 
								src='/images/css3_144.svg'
								alt='CSS3'
								layout='fill'
								objectFit='contain'
							/>
						</Box>
						<Typography variant='caption' fontSize='large' color='textSecondary' textAlign='center'>CSS3</Typography>
					</Box>
					<Box sx={ imgContainerStyle }>    
						<Box sx={ imageStyle } >
							<Image 
								src='/images/git_144.svg'
								alt='CSS3'
								layout='fill'
								objectFit='contain'
							/>
						</Box>
						<Typography variant='caption' fontSize='large' color='textSecondary' textAlign='center'>Git</Typography>
					</Box>
					<Box sx={ imgContainerStyle }>    
						<Box sx={ imageStyle } >
							<Image 
								src='/images/github_144.svg'
								alt='CSS3'
								layout='fill'
								objectFit='contain'
							/>
						</Box>
						<Typography variant='caption' fontSize='large' color='textSecondary' textAlign='center'>Github</Typography>
					</Box>
					<Box sx={ imgContainerStyle }>    
						<Box sx={ imageStyle } >
							<Image 
								src='/images/html_144.svg'
								alt='CSS3'
								layout='fill'
								objectFit='contain'
							/>
						</Box>
						<Typography variant='caption' fontSize='large' color='textSecondary' textAlign='center'>HTML</Typography>
					</Box>
					<Box sx={ imgContainerStyle }>    
						<Box sx={ imageStyle } >
							<Image 
								src='/images/javascript_144.svg'
								alt='CSS3'
								layout='fill'
								objectFit='contain'
							/>
						</Box>
						<Typography variant='caption' fontSize='large' color='textSecondary' textAlign='center'>Javascript</Typography>
					</Box>
					<Box sx={ imgContainerStyle }>    
						<Box sx={ imageStyle } >
							<Image 
								src='/images/materialui_144.svg'
								alt='CSS3'
								layout='fill'
								objectFit='contain'
							/>
						</Box>
						<Typography variant='caption' fontSize='large' color='textSecondary' textAlign='center'>Material UI</Typography>
					</Box>
					<Box sx={ imgContainerStyle }>    
						<Box sx={ imageStyle } >
							<Image 
								src='/images/mongodb_144.svg'
								alt='CSS3'
								layout='fill'
								objectFit='contain'
							/>
						</Box>
						<Typography variant='caption' fontSize='large' color='textSecondary' textAlign='center'>Mongo DB</Typography>
					</Box>
					<Box sx={ imgContainerStyle }>    
						<Box sx={ imageStyle } >
							<Image 
								src='/images/mysql_144.svg'
								alt='CSS3'
								layout='fill'
								objectFit='contain'
							/>
						</Box>
						<Typography variant='caption' fontSize='large' color='textSecondary' textAlign='center'>MySql</Typography>
					</Box>
					<Box sx={ imgContainerStyle }>    
						<Box sx={ imageStyle } >
							<Image 
								src='/images/nodejs_144.svg'
								alt='CSS3'
								layout='fill'
								objectFit='contain'
							/>
						</Box>
						<Typography variant='caption' fontSize='large' color='textSecondary' textAlign='center'>NodeJS</Typography>
					</Box>
					<Box sx={ imgContainerStyle }>    
						<Box sx={ imageStyle } >
							<Image 
								src='/images/react_144.svg'
								alt='CSS3'
								layout='fill'
								objectFit='contain'
							/>
						</Box>
						<Typography variant='caption' fontSize='large' color='textSecondary' textAlign='center'>ReactJS</Typography>
					</Box>
					<Box sx={ imgContainerStyle }>    
						<Box sx={ imageStyle } >
							<Image 
								src='/images/sass_144.svg'
								alt='CSS3'
								layout='fill'
								objectFit='contain'
							/>
						</Box>
						<Typography variant='caption' fontSize='large' color='textSecondary' textAlign='center'>Sass</Typography>
					</Box>
					<Box sx={ imgContainerStyle }>    
						<Box sx={ imageStyle } >
							<Image 
								src='/images/nextjs_144.png'
								alt='CSS3'
								layout='fill'
								objectFit='contain'
							/>
						</Box>
						<Typography variant='caption' fontSize='large' color='textSecondary' textAlign='center'>NextJS</Typography>
					</Box>
				</Box>
			</Container>
		</Box>
	)
}