import Image from 'next/image'
import { NextPage } from 'next'
import { Box, Container, Typography } from '@mui/material'

/*  */
import { MainLayout, SEO } from '../layouts'
import { AboutMe, CustomDivider, MainPresentation, Skills, WhatIDo, WorkExperience } from '../components'



interface Props {
    
}
const Home: NextPage<Props> = ({ }) => {

    return (
        <>
            <SEO 
                title='Portafolio - Aureliano Torres Sandoval'
                description='Portaforlio de proyectos e información de contacto de Aureliano Torres Sandoval'
                keywords={['Aureliano', 'Torres', 'Sandoval', 'Portafolio', 'Proyectos' ]}
                url='http://localhost:3000/'
                urlImage='https://res.cloudinary.com/ssaurexd/image/upload/v1660676943/profile/me_fb_mg81vp.webp'
            />

            {/* ___ contenido ___ */}
            <MainLayout>
                <MainPresentation />
                <AboutMe />
                <WhatIDo />
                <WorkExperience />
                <Skills />

                <Box
                    component='section'
                    sx={{
                        backgroundColor: 'background.paper',
                        py: '100px'
                    }}
                >
                    <Container>
                        <CustomDivider label='Portafolio' description='Mis proyectos' />
                    </Container>
                </Box>
            </MainLayout>
        </>
    )
}

export default Home