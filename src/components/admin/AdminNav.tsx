import { FC } from 'react'
import { 
	AppBar as MuiAppBar, 
	AppBarProps, 
	IconButton, 
	styled, 
	Toolbar,
	Typography
} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
/*  */
import { drawerWidth } from '../../config'


interface Props {
	open: boolean;
	handleDrawerOpen: () => void
}
export const AdminNav: FC<Props> = ({ open, handleDrawerOpen }) => {

	return (
		<AppBar position='fixed' open={ open } elevation={ 0 } color='transparent' >
			<Toolbar>
				<IconButton
					aria-label='open drawer'
					onClick={ handleDrawerOpen }
					edge='start'
					sx={{
						marginRight: 5,
						...( open && { display: 'none' } ),
						color: theme => theme.palette.text.secondary
					}}
				>
					<MenuIcon />
				</IconButton>
				<Typography variant='h6' noWrap component='div'>
				</Typography>
			</Toolbar>
		</AppBar>
	)
}

interface BarProps extends AppBarProps {
	open?: boolean;
}
const AppBar = styled( MuiAppBar, {
	shouldForwardProp: ( prop ) => prop !== 'open',
})<BarProps>(({ theme, open }) => ({
	zIndex: theme.zIndex.drawer + 1,
	transition: theme.transitions.create(['width', 'margin'], {
		easing: theme.transitions.easing.sharp,
		duration: theme.transitions.duration.leavingScreen,
	}),
	...(open && {
		marginLeft: drawerWidth ,
		width: `calc(100% - ${ drawerWidth }px)`,
		transition: theme.transitions.create(['width', 'margin'], {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.enteringScreen,
		}),
	}),
}))