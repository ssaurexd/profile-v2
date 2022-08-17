import { FC } from 'react'
import { Box } from '@mui/material'
import Image from 'next/image'


interface Props {
	
}
export const Avatar: FC<Props> = () => {

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
					background: 'rgb(31,60,49) linear-gradient(120deg, rgba(31,60,49,1) 0%, rgba(0,193,118,1) 100%, rgba(0,237,145,1) 100%)'
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
					alt='Foto de Aure'
					layout='fill'
					style={{
						filter: 'grayscale(30%) brightness(90%)',
					}}
				/>
			</Box>
		</Box>
	)
}