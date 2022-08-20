import { FC } from 'react'
import { useRouter } from 'next/router'
import Image from 'next/image'
import { Box, darken } from '@mui/material'


interface Props {
	
}
export const Avatar: FC<Props> = () => {

	const router = useRouter()

	return (
		<Box
			sx={{
				width:{ xs: '250px', sm: '300px', md: '400px', lg: '400px'},
				height:{ xs: '250px', sm: '300px', md: '400px', lg: '400px'},
				position: 'relative'
			}}
		>
			<Box  
				sx={{
					width: '100%',
					height: '100%',
					borderRadius: '33% 67% 50% 50% / 51% 42% 58% 49% ',
					background: theme => `
						${ darken( theme.palette.primary.main, 0.8 ) } 
						linear-gradient(120deg, ${ darken( theme.palette.primary.main, 0.7 ) } 0%, 
						${ theme.palette.primary.main } 100%, ${ theme.palette.primary.light } 100%)`
				}}
			/>
			<Box
				sx={{
					position: 'absolute',
					bottom: '-2px',
					right: '0',
					width: { xs: '250px', sm: '300px', md: '400px'},
					height: { xs: '250px', sm: '300px', md: '400px'},
					borderRadius: '100%',
					overflow: 'hidden',
					zIndex: 10
				}}
			>
				<Image 
					src='https://res.cloudinary.com/ssaurexd/image/upload/v1660758877/profile/me_transparent_ryhx7i.png'
					objectFit='contain'
					priority
					alt='Foto de Aure'
					layout='fill'
					style={{
						filter: 'grayscale(10%) brightness(90%) drop-shadow(5px 5px 5px #222)',
					}}
					onDoubleClick={ () => router.push( '/login' ) }
				/>
			</Box>
		</Box>
	)
}