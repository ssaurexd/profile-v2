import { FC } from 'react'
import { IconButton } from '@mui/material'
import DarkModeIcon from '@mui/icons-material/DarkMode'
import LightModeIcon from '@mui/icons-material/LightMode'
/*  */
import { useAppDispatch, useAppSelector } from '../../hooks'
import { themeToggle } from '../../redux'


interface Props {
	
}
export const ToggleTheme: FC<Props> = () => {

	const theme = useAppSelector( state => state.theme.type )
    const dispatch = useAppDispatch()

	return (
		<IconButton
			onClick={ () => dispatch( themeToggle() ) }
			sx={{
				color: theme => theme.palette.text.secondary
			}}
		>
			{ theme === 'dark' ? <DarkModeIcon color='inherit' /> : <LightModeIcon color='inherit' /> }
		</IconButton>
	)
}