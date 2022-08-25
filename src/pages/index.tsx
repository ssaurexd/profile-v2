import { NextPage, GetStaticProps } from 'next'
/*  */
import { IProject } from '../interfaces'
/*  */
import { MainLayout, SEO } from '../layouts'
import { 
    AboutMe, 
    Contact,
    MainPresentation,
    ProjectsList, 
    Skills, 
    WhatIDo, 
    WorkExperience 
} from '../components'
import Phrase from '../components/ui/presentation/Phrase'
import { projectDB } from '../database'


interface Props {
    lastesProjects: IProject[]
}
const Home: NextPage<Props> = ({ lastesProjects }) => {

    return (
        <>
            <SEO 
                title='Aureliano Torres Sandoval'
                description='Portafolio de proyectos e información de contacto de Aureliano Torres Sandoval'
                keywords={['Aureliano', 'Torres', 'Sandoval', 'Portafolio', 'Proyectos' ]}
                url='https://ssaurexd.com/'
                urlImage='https://res.cloudinary.com/ssaurexd/image/upload/v1660676943/profile/me_fb_mg81vp.webp'
            />

            {/* ___ contenido ___ */}
            <MainLayout>
                <MainPresentation />
                <AboutMe />
                <WhatIDo />
                <WorkExperience />
                <Phrase />
                <ProjectsList lastesProjects={ lastesProjects } />
                <Skills />
                <Contact />
            </MainLayout>
        </>
    )
}

export const getStaticProps: GetStaticProps = async ({  }) => {

    const lastesProjects = await projectDB.getLastThreeProjectes()

    return {
        props: {
            lastesProjects
        },
        revalidate: 60 * 60 * 24 //24h
    }
}

export default Home