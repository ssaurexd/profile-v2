import { FC } from 'react'
import Link from 'next/link'
import { Box, Container, Divider, List, ListItem, Typography, Link as MuiLink } from '@mui/material'
import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import FacebookIcon from '@mui/icons-material/Facebook'
import InstagramIcon from '@mui/icons-material/Instagram'


const date = new Date()
const pages = [
	{ label: 'Proyectos', to: '#' },
	{ label: 'Experiencia', to: '#' },
	{ label: 'Habilidades', to: '#' },
	{ label: 'Acerca de mi', to: '#' },
]
interface Props {
	
}
export const Footer: FC<Props> = () => {

	return (
		<Box
			component='footer'
			sx={{
				pt: '100px'
			}}
		>
			<Container>
				<Box
					sx={{
						display: 'flex',
						width: '100%',
						gap: 3,
						justifyItems: 'center',
						py: 3 
					}}
				>
					<Box p={ 3 } width='100%' flex={ 1 }>
						<Typography fontWeight={700} textTransform='uppercase' sx={{ p: 3, textAlign: 'center' }} >Menú</Typography>
						<List sx={{ flexGrow: 1, display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 3, flexWrap: 'wrap' }}>
							{ pages.map(( page ) => (
                                <ListItem key={ page.label } sx={{ p: 0, width: 'auto', mb: 1 }} >
                                    <Link
                                        href={ page.to }
                                        passHref
                                    >
                                        <MuiLink
                                            sx={{ 
                                                display: 'inline-block',
                                                textDecoration: 'none',
                                                position: 'relative',
                                                overflow: 'hidden',
												textAlign: 'center',
                                                '&::after' : {
                                                    content: `''`,
                                                    position: 'absolute',
                                                    bottom: '0',
                                                    left: '-100%',
                                                    width: '60%',
                                                    height: '2px',
                                                    background: theme => theme.palette.primary.main,
                                                    transition: 'left 400ms',
                                                },
                                                '&:hover::after': {
                                                    left: '0'
                                                }
                                            }}
                                        >
                                            <Typography color='textSecondary'  >
                                                { page.label }
                                            </Typography>
                                        </MuiLink>   
                                    </Link>
                                </ListItem>
                            ))}
						</List>
					</Box>
					<Box p={ 3 } flex={ 1 }>
						<Typography fontWeight={700} textTransform='uppercase' sx={{ p: 3, textAlign: 'center' }} >Socials</Typography>
						<Box
							sx={{
								display: 'flex',
								flexWrap: 'wrap',
								gap: '10px',
								justifyContent: 'center',
								alignItems: 'flex-start'
							}}
						> 
							<CustomSocial href='https://github.com/ssaurexd' icon={ <GitHubIcon color='inherit' /> } />
							<CustomSocial href='https://www.linkedin.com/in/aure-sand-49a77b1b7/' icon={ <LinkedInIcon color='inherit' /> } />
							<CustomSocial href='https://www.facebook.com/sanji.sand.9/' icon={ <FacebookIcon color='inherit' /> } />
							<CustomSocial href='https://www.instagram.com/ssaurexdd/' icon={ <InstagramIcon color='inherit' /> } />
						</Box>
					</Box>
				</Box>
				<Divider />
				<Box sx={{ py: 3 }} >
					<Typography textAlign='center'>By ssaurexd { date.getFullYear() }</Typography>
				</Box>
			</Container>
		</Box>
	)
}

interface LinkProps {
	icon: JSX.Element;
	href: string;
}
const CustomSocial: FC<LinkProps> = ({ href, icon }) => {

	return (
		<MuiLink
			sx={{
				display: 'block',
				textDecoration: 'none',
				color: theme => theme.palette.text.secondary,
				transition: 'all ease 400ms',
				'&:hover': {
					color: theme => theme.palette.primary.main
				}
			}}
			href={ href }
			target='_blank'
		>
			<Typography color='inherit' display='flex' alignItems='center' >
				{ icon }
			</Typography>
		</MuiLink>  
	)
}