import { FC, useState } from 'react'
import { useRouter } from 'next/router'
import { signOut } from 'next-auth/react'
import { 
	styled,
	Drawer as MuiDrawer, 
	IconButton,
	ListItemButton,
	ListItemIcon,
	ListItemText,
	Theme,
	CSSObject,
	Box,
	Collapse,
	ListItemButtonProps
} from '@mui/material'
import PermMedia from '@mui/icons-material/PermMedia'
import Dns from '@mui/icons-material/Dns'
import KeyboardArrowDown from '@mui/icons-material/KeyboardArrowDown'
import LightModeIcon from '@mui/icons-material/LightMode'
import DarkModeIcon from '@mui/icons-material/DarkMode'
import LogoutIcon from '@mui/icons-material/Logout'
import MenuOpenIcon from '@mui/icons-material/MenuOpen'
import MenuIcon from '@mui/icons-material/Menu'
/*  */
import { drawerWidth } from '../../config'
import { useAppDispatch, useAppSelector } from '../../hooks'
import { themeToggle } from '../../redux'


const projectItems = [
	{ icon: <Dns />, label: 'Crear nuevo proyecto', to: '/admin/project/new' },
	{ icon: <PermMedia />, label: 'Ver proyectos', to: '/admin/project' }
]
const configItems: any[] = [
]
interface Props {
	handleDrawerClose: () => void;
	handleDrawerOpen: () => void;
	open: boolean
}
export const AdminSidebar: FC<Props> = ({ open, handleDrawerClose, handleDrawerOpen }) => {

	const [ openProjectMenu, setOpenProjectMenu ] = useState( true )
	const [ openConfig, setOpenConfig ] = useState( true )
	const theme = useAppSelector( state => state.theme.type ) 
	const dispatch = useAppDispatch()
	const router = useRouter()

	/* functions */
	const onPathChange = ( to: string ) => {
		
		router.push( to )
	}

	return (
		<Drawer variant='permanent' open={ open } >
			<DrawerHeader
				sx={{
					display: 'flex',
					justifyContent: open ? 'flex-end' : 'center'
				}}
			>
				{ open 
					? (
						<IconButton onClick={ handleDrawerClose }>
							<MenuOpenIcon />
						</IconButton>
					) 
					: (
						<IconButton
							onClick={ handleDrawerOpen }
							sx={{
								color: theme => theme.palette.text.secondary
							}}
						>
							<MenuIcon />
						</IconButton>
					)
				}
			</DrawerHeader>
			{/* Menu Configuracion */}
			<Box
				sx={{
					pb: openConfig ? 2 : 0,
				}}
			>
				<CustomListItemSubtitle 
					subTitle='Configuración'
					onClose={ () => setOpenConfig( !openConfig ) }
					open={ openConfig }
					isDrawerOpen={ open }
				/>
				<Collapse in={ openConfig } timeout='auto' unmountOnExit>
					<CustomListItemButton 
						label={ theme }
						icon={ theme === 'dark' ? <DarkModeIcon /> : <LightModeIcon /> }
						onClick={ () => dispatch( themeToggle() ) }
						to=''
					/>
					<CustomListItemButton 
						label='Cerrar sesión'
						icon={ <LogoutIcon /> }
						onClick={ () => signOut() }
						to=''
					/>
					{ configItems.map(( item ) => ( 
						<CustomListItemButton 
							key={ item.to } 
							label={ item.label } 
							icon={ item.icon }
							to={ item.to }
							onClick={ () => onPathChange( item.to ) }
						/> 
					))}
				</Collapse>
			</Box>

			{/* Menu Proyectos */}
			<Box
				sx={{
					pb: openProjectMenu ? 2 : 0,
				}}
			>
				<CustomListItemSubtitle 
					subTitle='Proyectos'
					onClose={ () => setOpenProjectMenu( !openProjectMenu ) }
					open={ openProjectMenu }
					isDrawerOpen={ open }
				/>
				<Collapse in={ openProjectMenu } timeout='auto' unmountOnExit>
					{ projectItems.map(( item ) => ( 
						<CustomListItemButton 
							key={ item.to } 
							label={ item.label } 
							icon={ item.icon }
							to={ item.to }
							onClick={ () => onPathChange( item.to ) }
						/> 
					))}
				</Collapse>
			</Box>
		</Drawer>
	)
}

interface PropsCustomListItemSubtitle {
	open: boolean;
	subTitle: string;
	onClose: () => void;
	isDrawerOpen: boolean;
}
const CustomListItemSubtitle: FC<PropsCustomListItemSubtitle> = ({ open, subTitle, isDrawerOpen, onClose }) => {
	return (
		<ListItemButton
			alignItems='flex-start'
			onClick={ onClose }
			sx={{
				px: 3,
				pt: 2.5,
				pb: 2.5,
				'&:hover': {
					'& svg': { opacity: isDrawerOpen ? 1 : 0 },
				},
			}}
		>
			<ListItemText
				primary={ isDrawerOpen ? subTitle : subTitle.charAt( 0 ) }
				primaryTypographyProps={{
					fontSize: 15,
					fontWeight: 'medium',
					lineHeight: '20px',
					mb: '2px',
				}}
				sx={{ my: 0 }}
			/>
			<KeyboardArrowDown
				sx={{
					mr: -1,
					opacity: 0,
					transform: open
						? 'rotate(-180deg)'
						: 'rotate(0)',
					transition: '0.2s',
				}}
			/>
		</ListItemButton>
	)
}

interface PropsCustomListItemButton extends ListItemButtonProps {
	icon: JSX.Element;
	label: string;
	to: string
}
const CustomListItemButton: FC<PropsCustomListItemButton> = ({ icon, label, to, ...restProps }) => {

	const router = useRouter()

	return (
		<ListItemButton
			{ ...restProps }
			sx={{
				py: 0,
				minHeight: 32,
				color: theme => to === router.pathname ? theme.palette.primary.main : theme.palette.text.secondary,
				borderRight: ({ palette }) => to === router.pathname ? `2px solid ${ palette.primary.main }` : 'none'
			}}
		>
			<ListItemIcon sx={{ color: 'inherit' }}>
				{ icon }
			</ListItemIcon>
			<ListItemText
				primary={ label }
				primaryTypographyProps={{
					fontSize: 14,
					fontWeight: 'medium',
				}}
			/>
		</ListItemButton>
	)
}
const openedMixin = ( theme: Theme ): CSSObject => ({
	width: drawerWidth,
	transition: theme.transitions.create('width', {
		easing: theme.transitions.easing.sharp,
		duration: theme.transitions.duration.enteringScreen,
	}),
	overflowX: 'hidden'
})
const closedMixin = ( theme: Theme ): CSSObject => ({
	transition: theme.transitions.create('width', {
		easing: theme.transitions.easing.sharp,
		duration: theme.transitions.duration.leavingScreen,
	}),
	overflowX: 'hidden',
	width: `calc(${ theme.spacing( 7 ) } + 1px)`,
	[theme.breakpoints.up('sm')]: {
	  	width: `calc(${ theme.spacing( 8 ) } + 1px)`,
	}
})
export const DrawerHeader = styled( 'div' )(({ theme }) => ({
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'flex-end',
	padding: theme.spacing( 0, 1 ),
	...theme.mixins.toolbar,
}))
const Drawer = styled( MuiDrawer, { shouldForwardProp: ( prop ) => prop !== 'open' })(
	({ theme, open }) => ({
		width: drawerWidth,
		flexShrink: 0,
		whiteSpace: 'nowrap',
		boxSizing: 'border-box',
		...( open && {
			...openedMixin( theme ),
			'& .MuiDrawer-paper': openedMixin( theme ),
		}),
		...( !open && {
			...closedMixin( theme ),
			'& .MuiDrawer-paper': closedMixin( theme ),
		}),
	})
)