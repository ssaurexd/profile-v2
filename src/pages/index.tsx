import Image from 'next/image'
import { NextPage, GetStaticProps } from 'next'
import { Box, Container, Paper, Typography } from '@mui/material'
/*  */
import { IProject } from '../interfaces'
import { api } from '../config'
/*  */
import { MainLayout, SEO } from '../layouts'
import { 
    AboutMe, 
    CustomDivider, 
    MainPresentation, 
    ProjectCard, 
    ProjectsList, 
    Skills, 
    WhatIDo, 
    WorkExperience 
} from '../components'


interface Props {
    lastesProjects: IProject[]
}
const Home: NextPage<Props> = ({ lastesProjects }) => {

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
                <ProjectsList lastesProjects={ lastesProjects } />
                <Box
                    component='section'
                    sx={{
                        py: '100px'
                    }}
                >
                    <Container  >
                        <Paper elevation={ 0 } >
                            hola mundo
                        </Paper>
                    </Container>
                </Box>
            </MainLayout>
        </>
    )
}

export const getStaticProps: GetStaticProps = async ( ctx ) => {

    /* const { data: { projects } } = await api.post<{ projects: IProject[] }>( '/project/last-three' ) */

    return {
        props: {
            lastesProjects: []
        }
    }
}

export default Home