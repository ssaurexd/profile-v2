import { cloneElement, FC, ReactElement } from 'react'
import Link from 'next/link'
import { 
    Box, 
    Container, 
    Typography, 
    useScrollTrigger,
    Link as MuiLink, 
    List, 
    ListItem, 
    ListItemButton,
    ListItemText,
    Drawer
} from '@mui/material'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
/*  */
import { pages } from '../../config'
import { useAppDispatch, useAppSelector } from '../../hooks'
import { appSetActiveMenu, appToggleMenu } from '../../redux'
/*  */
import { ToggleTheme } from './ToggleTheme'
import { ScrollLink } from '../ui/link/ScrollLink'


interface ElevationScrollProps {
    window?: () => Window
    children: ReactElement
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
        color: trigger ? 'default' : 'transparent'
    })
}

const socialStyle = {
    display: 'block',
    textDecoration: 'none',
    mr: { xs: 1, md: 2 } ,
    color: (theme: any ) => theme.palette.text.secondary,
    transition: 'all ease 400ms',
    '&:hover': {
        color: ( theme: any )=> theme.palette.primary.main
    }
}
interface Props {}
export const Navbar: FC<Props> = ( ) => {

    const { isMenuOpen, activeMenu } = useAppSelector( state => state.app )
    const dispatch = useAppDispatch()

    /* function */
    const onCloseMenu = () => dispatch( appToggleMenu( false ) )
    const onOpenMenu = () => dispatch( appToggleMenu( true ) ) 
    const setPage = ( to: string ) => {
        
        dispatch( appSetActiveMenu( to ) )
        onCloseMenu()
    }

    return (
        <ElevationScroll >
            <AppBar >
                <Container>
                    <Toolbar disableGutters component='nav'>
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
						<List 
                            sx={{ 
                                flexGrow: 1, 
                                display: { xs: 'none', md: 'flex' }, 
                                justifyContent: 'center', 
                                alignItems: 'center', 
                                gap: 3 
                            }}
                        >
                            { pages.map(( page ) => (
                                <ListItem key={ page.label } sx={{ p: 0, width: 'auto' }} >
                                    <ScrollLink 
                                        label={ page.label }
                                        to={ page.to }
                                    />  
                                </ListItem>
                            ))}
                        </List>

						{/* Mobile */}
                        <Box 
                            sx={{ 
                                flexGrow: 0, 
                                display: { xs: 'flex', md: 'none' }, 
                                color: theme => theme.palette.text.secondary 
                            }}
                        >
                            <IconButton
                                size='large'
                                aria-label='account of current user'
                                aria-controls='menu-appbar'
                                aria-haspopup='true'
                                onClick={ onOpenMenu }
                                color='inherit'
                            >
                                <MenuIcon />
                            </IconButton>
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
								sx={ socialStyle }
								href='https://github.com/ssaurexd'
								target='_blank'
							>
								<Typography color='inherit' display='flex' alignItems='center' >
									<GitHubIcon color='inherit' />
								</Typography>
							</MuiLink>   
							<MuiLink
								sx={ socialStyle }
								href='https://www.linkedin.com/in/aure-sand-49a77b1b7/'
								target='_blank'
							>
								<Typography color='inherit' display='flex' alignItems='center' >
									<LinkedInIcon color='inherit' sx={{ fontSize: '1.8rem' }} />
								</Typography>
							</MuiLink>
                            <ToggleTheme 
                                sx={{
                                    color: theme => theme.palette.text.secondary,
                                    display: { xs: 'none', md: 'flex' }
                                }}
                            />
                        </Box>
                    </Toolbar>
                </Container>
                <Drawer
                    open={ isMenuOpen }
                    onClose={ onCloseMenu }
                >
                    <Toolbar
                        sx={{
                            display: 'flex',
                            justifyContent: 'flex-end'
                        }}
                    >
                        <ToggleTheme />
                    </Toolbar>
                    <Box
                        sx={{ width: 250 }}
                    >
                        <List >
                            { pages.map(( page ) => (
                                <ListItem key={ page.label } disablePadding>
                                    <ListItemButton
                                        sx={{
                                            borderRight: theme => activeMenu === page.to ? `4px solid ${ theme.palette.primary.main }` : 'none'
                                        }}
                                    >
                                        <ListItemText>
                                            <ScrollLink 
                                                label={ page.label }
                                                to={ page.to }
                                                isMobile
                                                onActiveLink={ () => setPage( page.to ) }
                                            /> 
                                        </ListItemText>
                                    </ListItemButton>
                                </ListItem>
                            ))}
                        </List>
                    </Box>
                </Drawer>
            </AppBar>
        </ElevationScroll>
    )
}