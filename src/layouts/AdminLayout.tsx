import { FC, useState } from 'react'
import { Box } from '@mui/material'
/*  */
import { ThemeLayout } from './ThemeLayout'
import { AdminSidebar } from '../components'


interface Props {
	children: JSX.Element | JSX.Element[]
}
export const AdminLayout: FC<Props> = ({ children }) => {

	const [ open, setOpen ] = useState( true )

	/* functions */
	const handleDrawerOpen = () => setOpen( true )
	const handleDrawerClose = () => setOpen( false )

	return (
		<ThemeLayout>
			<Box sx={{ display: 'flex' }}>
				<AdminSidebar open={ open } handleDrawerClose={ handleDrawerClose } handleDrawerOpen={ handleDrawerOpen } />
				<Box component='main' sx={{ flexGrow: 1, p: 3 }}>
					{ children }
				</Box>
			</Box>
		</ThemeLayout>
	)
}