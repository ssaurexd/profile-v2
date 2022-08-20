import { FC } from 'react'
import { Box, Container, Typography } from '@mui/material'
import { Timeline, TimelineConnector, TimelineContent, TimelineDot, TimelineItem, TimelineOppositeContent, TimelineSeparator } from '@mui/lab'
import SchoolIcon from '@mui/icons-material/School'
import StarIcon from '@mui/icons-material/Star'
import WorkIcon from '@mui/icons-material/Work'
/*  */
import { CustomDivider } from '../CustomDivider'


interface Props {
	
}
export const WorkExperience: FC<Props> = () => {

	return (
		<Box
            component='section'
			sx={{
				backgroundColor: 'background.paper',
				py: '100px'
			}}
		>
			<Container>
				<CustomDivider label='Como lo he llevado' description='Mi experiencia' />
				<Typography color='textSecondary' fontSize='large' sx={{ mb: '100px' }}>
					Desde mi vida como universitario logre adiquirir un poco de experiencia como hasta el momento donde cada día me esfuerzon en aprender más, ya sea aprendiendo con la experiencia de mis compañeros, aceptando su retroalimentación como siendo autodidacta.
				</Typography>
				<MyExperience />
			</Container>
		</Box>
	)
}

const MyExperience = () => {
    return (
        <Timeline position='alternate'>
            <TimelineItem>
                <TimelineOppositeContent
                    sx={{ m: 'auto 0' }}
                    align='right'
                    variant='body2'
                    color='primary'
                >
                    diciembre 2015 — agosto 2019
                </TimelineOppositeContent>
                <TimelineSeparator>
                    <TimelineConnector />
                    <TimelineDot color='primary' >
                        <SchoolIcon />
                    </TimelineDot>
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent sx={{ py: '12px', px: 2 }}>
                    <Typography variant='h6' component='span' textTransform='uppercase'>
                        Educación
                    </Typography>
                    <Typography color='textSecondary'>
                        Ingenieria en Tecnologías de la Información y Comunicaciones, Tecnológico Nacional de México, CDMX.
                    </Typography>
                </TimelineContent>
            </TimelineItem>

            <TimelineItem>
                <TimelineOppositeContent
                    sx={{ m: 'auto 0' }}
                    align='right'
                    variant='body2'
                    color='primary'
                >
                    Del 2 al 5 de Octubre del 2018
                </TimelineOppositeContent>
                <TimelineSeparator>
                    <TimelineConnector />
                    <TimelineDot color='primary' >
                        <StarIcon />
                    </TimelineDot>
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent sx={{ py: '12px', px: 2 }}>
                    <Typography variant='h6' component='span' textTransform='uppercase'>
                        Participación: LiberApp
                    </Typography>
                    <Typography color='textSecondary'>
                        Participacion en concurso de innovación, presentando el proyecto LiberApp ( aplicación movil que bascaba reducir el incremento de secuestros en la Ciudad de México haciendo uso de los sensores del telefono inteligente ) en el Evento Nacional Estudiatil de Innovación Tecnologica 2018.
                    </Typography>
                </TimelineContent>
            </TimelineItem>

            <TimelineItem>
                <TimelineOppositeContent
                    sx={{ m: 'auto 0' }}
                    align='right'
                    variant='body2'
                    color='primary'
                >
                    Del 5 al 6 de Noviembre del 2018
                </TimelineOppositeContent>
                <TimelineSeparator>
                    <TimelineConnector />
                    <TimelineDot color='primary' >
                        <StarIcon />
                    </TimelineDot>
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent sx={{ py: '12px', px: 2 }}>
                    <Typography variant='h6' component='span' textTransform='uppercase'>
                        Hackathon: Desastres naturales
                    </Typography>
                    <Typography color='textSecondary'>
                        Hackathon en Innovatis Premio Nacional de Innovacion Tecnologica para la Inclución Social Tercera Edición 2018. Tematica: desarrollar una solución tecnologica para una situacion de desastres naturales.
                    </Typography>
                </TimelineContent>
            </TimelineItem>

            <TimelineItem>
                <TimelineOppositeContent
                    sx={{ m: 'auto 0' }}
                    align='right'
                    variant='body2'
                    color='primary'
                >
                    Agosto 2019 — Enero 2020
                </TimelineOppositeContent>
                <TimelineSeparator>
                    <TimelineConnector />
                    <TimelineDot color='primary' >
                        <WorkIcon />
                    </TimelineDot>
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent sx={{ py: '12px', px: 2 }}>
                    <Typography variant='h6' component='span' textTransform='uppercase'>
                        Cineteca Nacional de México, CDMX.
                    </Typography>
                    <Typography color='textSecondary'>
                        Proyecto como parte de mis practicas profesionales de la Videoteca Digital donde actualmente esta en funcionamiento y de acceso público, en donde se hizo uso de las tecnologias: Javascript, Boostrap, PHP, MySql.
                    </Typography>
                </TimelineContent>
            </TimelineItem>

            <TimelineItem>
                <TimelineOppositeContent
                    sx={{ m: 'auto 0' }}
                    align='right'
                    variant='body2'
                    color='primary'
                >
                    Enero 2021 — Hasta la fecha
                </TimelineOppositeContent>
                <TimelineSeparator>
                    <TimelineConnector />
                    <TimelineDot color='primary' >
                        <WorkIcon />
                    </TimelineDot>
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent sx={{ py: '12px', px: 2 }}>
                    <Typography variant='h6' component='span' textTransform='uppercase'>
                        Desarrollador Jr. en Filmarket Hub
                    </Typography>
                    <Typography color='textSecondary'>
                        Actividades que suelo hacer: colaborar con miebros del equipo de desarrollo multifuncional para analizar posibles soluciones para los sistemas, definicion de interfaces de usuario con ReactJS, SASS y Material UI, trabajo en Back-End con Meteor JS, MongoDB, Git y NodeJS. O incluso a cargo de desarrollos internacionales donde se hizo una comunicación mediante una REST API
                    </Typography>
                </TimelineContent>
            </TimelineItem>
        </Timeline>
    )
}