import { useState, MouseEvent, cloneElement, FC } from 'react'
import Link from 'next/link'
import { Box, Container, Typography, useScrollTrigger, Menu, MenuItem, Link as MuiLink } from '@mui/material'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';


interface ElevationScrollProps {
    window?: () => Window
    children: React.ReactElement
}
const ElevationScroll = ( props: ElevationScrollProps ) => {

    const { children, window } = props
    const trigger = useScrollTrigger({
      disableHysteresis: true,
      threshold: 80,
      target: window ? window() : undefined,
    })
  
    return cloneElement( children, {
        elevation: trigger ? 3 : 0,
        color: trigger ? 'primary' : 'transparent'
    })
}

const pages = [
	{ label: 'Proyectos', to: '#' },
	{ label: 'Experiencia', to: '#' },
	{ label: 'Habilidades', to: '#' },
	{ label: 'Acerca de mi', to: '#' }
]
interface Props {}
export const Navbar: FC<Props> = ( ) => {

    const [ anchorElNav, setAnchorElNav ] = useState<null | HTMLElement>( null )

    /* functions */
    const handleOpenNavMenu = ( event: MouseEvent<HTMLElement> ) => setAnchorElNav( event.currentTarget )
    const handleCloseNavMenu = () => setAnchorElNav( null )

    return (
        <ElevationScroll >
            <AppBar >
                <Container>
                    <Toolbar disableGutters>
						{/* Desktop */}
                        <Link href='/' passHref>
                            <Typography
                                variant='h6'
                                noWrap
                                component='a'
                                sx={{
                                    mr: 2,
                                    display: { xs: 'none', md: 'flex' },
                                    fontFamily: 'Orbitron',
                                    fontWeight: 700,
                                    color: 'inherit',
                                    textDecoration: 'none',
                                    letterSpacing: '.3rem'
                                }}
                            >
                                ssaurexd
                            </Typography>
                        </Link>
						<Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'center', alignItems: 'center' }}>
                            { pages.map(( page ) => (
								<Link
									key={ page.label }
									href={ page.to }
									passHref
								>
									<MuiLink
										sx={{ 
											display: 'inline-block',
											textDecoration: 'none',
											mr: 3,
											position: 'relative',
											overflow: 'hidden',
											'&::after' : {
												content: `''`,
												position: 'absolute',
												bottom: '0',
												left: '-100%',
												width: '60%',
												height: '2px',
												background: '#00c176',
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
                            ))}
                        </Box>

						{/* Mobile */}
                        <Box sx={{ flexGrow: 0, display: { xs: 'flex', md: 'none' } }}>
                            <IconButton
                                size='large'
                                aria-label='account of current user'
                                aria-controls='menu-appbar'
                                aria-haspopup='true'
                                onClick={ handleOpenNavMenu }
                                color='inherit'
                            >
                            	<MenuIcon />
                            </IconButton>
                            <Menu
                                id='menu-appbar'
                                anchorEl={ anchorElNav }
                                anchorOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'left',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'left',
                                }}
                                open={ Boolean(anchorElNav) }
                                onClose={ handleCloseNavMenu }
                                sx={{
                                    display: { xs: 'block', md: 'none' },
                                }}
                            >
                            { pages.map(( page ) => (
                                <MenuItem key={ page.label } onClick={ handleCloseNavMenu }>
                                	<Typography textAlign='center'>{ page.label }</Typography>
                                </MenuItem>
                            )) }
                            </Menu>
                        </Box>
                        <Link href='/' passHref>
                            <Typography
                                variant='h5'
                                noWrap
                                component='a'
                                sx={{
                                    display: { xs: 'flex', md: 'none' },
                                    flexGrow: 1,
                                    fontFamily: 'Orbitron',
									justifyContent: 'center',
                                    fontWeight: 700,
                                    letterSpacing: '.3rem',
                                    color: 'inherit',
                                    textDecoration: 'none'
                                }}
                            >
                                ssaurexd
                            </Typography>
                        </Link>

						{/* Both */}
						<Box 
							sx={{ 
								flexGrow: 0, 
								display: { xs: 'flex' }, 
								justifyContent: 'flex-end', 
								alignItems: 'center' 
							}}
						>
							<MuiLink
								sx={{ 
									display: 'block',
									textDecoration: 'none',
									mr: { xs: 1, md: 2 } ,
									color: 'rgba(255, 255, 255, 0.7)',
                                    transition: 'all ease 400ms',
									'&:hover': {
										color: '#00c176'
									}
								}}
								href='https://github.com/ssaurexd'
								target='_blank'
							>
								<Typography color='inherit' display='flex' alignItems='center' >
									<GitHubIcon color='inherit' />
								</Typography>
							</MuiLink>   
							<MuiLink
								sx={{
									display: 'block',
									textDecoration: 'none',
									mr: { xs: 1, md: 2 } ,
									color: 'rgba(255, 255, 255, 0.7)',
                                    transition: 'all ease 400ms',
									'&:hover': {
										color: '#00c176'
									}
								}}
								href='https://www.linkedin.com/in/aure-sand-49a77b1b7/'
								target='_blank'
							>
								<Typography color='inherit' display='flex' alignItems='center' >
									<LinkedInIcon color='inherit' sx={{ fontSize: '1.8rem' }} />
								</Typography>
							</MuiLink>   
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
        </ElevationScroll>
    )
}