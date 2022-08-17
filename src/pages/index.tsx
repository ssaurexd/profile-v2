import { NextPage } from 'next'
import { Box, Button, Container } from '@mui/material'
/*  */
import { MainLayout, SEO } from '../layouts'
import { Avatar } from '../components'


interface Props {
    
}
const Home: NextPage<Props> = ({ }) => {

    return (
        <>
            <SEO 
                title='Portafolio - Aureliano Torres Sandoval'
                description='Portaforlio de proyectos e información de contacto'
                url='http://localhost:3000/'
                urlImage='https://res.cloudinary.com/ssaurexd/image/upload/v1660676943/profile/me_fb_mg81vp.webp'
            />

            {/* ___ contenido ___ */}
            <MainLayout>
                <Box
                    sx={{
                        minHeight: '100vh',
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
                                sx={{
                                    height: '100%',
                                    width: '100%'
                                }}
                            >
                                <Button href='https://www.linkedin.com/in/aure-sand-49a77b1b7/' variant='outlined' color='primary' size='large' target='_blank'>
                                    Contactame
                                </Button>
                            </Box>
                            <Box
                                display='flex'
                                justifyContent='center'
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
                <Box
                    sx={{
                        backgroundColor: 'background.paper',
                        minHeight: '100vh' 
                    }}
                >
                </Box>
            </MainLayout>
        </>
    )
}

export default Home