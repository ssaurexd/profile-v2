import { FC } from 'react'
import { IconButton, IconButtonProps } from '@mui/material'
import DarkModeIcon from '@mui/icons-material/DarkMode'
import LightModeIcon from '@mui/icons-material/LightMode'
/*  */
import { useAppDispatch, useAppSelector } from '../../hooks'
import { themeToggle } from '../../redux'


interface Props extends IconButtonProps {
	
}
export const ToggleTheme: FC<Props> = ( props ) => {

	const theme = useAppSelector( state => state.theme.type )
    const dispatch = useAppDispatch()

	return (
		<IconButton
			onClick={ () => dispatch( themeToggle() ) }
			{ ...props }
		>
			{ theme === 'dark' ? <DarkModeIcon color='inherit' /> : <LightModeIcon color='inherit' /> }
		</IconButton>
	)
}