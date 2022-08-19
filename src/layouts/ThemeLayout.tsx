import { FC, useMemo, useEffect } from 'react'
import { ThemeProvider, CssBaseline, Theme as MuiTheme } from '@mui/material'
/*  */
import { useAppDispatch, useAppSelector } from '../hooks'
import { darkTheme, lightTheme } from '../config'
import { themeToggle } from '../redux'
import { IThemeOption } from '../interfaces'

interface Props {
	children: JSX.Element | JSX.Element[]
}
export const ThemeLayout: FC<Props> = ({ children }) => {

	const themeApp = useAppSelector( state => state.theme.type )
	const dispatch = useAppDispatch()
	const theme: MuiTheme = useMemo( () => themeApp === 'light' ? lightTheme : darkTheme, [ themeApp ] )

	/* effects */
	useEffect( () => {

		const localTheme = localStorage.getItem('theme') as IThemeOption | undefined

		if( localTheme ) dispatch( themeToggle( localTheme ) )
	}, [ dispatch ])

	return (
		<ThemeProvider theme={ theme }>	
			<CssBaseline />
			{ children }
		</ThemeProvider>
	)
}