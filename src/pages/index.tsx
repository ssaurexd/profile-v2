import { NextPage } from 'next'
import { SEO } from '../layouts'


interface Props {
    
}
const index: NextPage<Props> = ({ }) => {

    return (
        <>
            <SEO 
                title='Portafolio - Aureliano Torres Sandoval'
                description='Portaforlio de proyectos e información de contacto'
                url='http://localhost:3000/'
                urlImage='https://res.cloudinary.com/ssaurexd/image/upload/v1660676943/profile/me_fb_mg81vp.webp'
            />

            {/* ___ contenido ___ */}
            <div>Hola mundo</div>
        </>
    )
}

export default index