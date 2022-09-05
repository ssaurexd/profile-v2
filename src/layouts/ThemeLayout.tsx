import { FC, useMemo, useEffect } from 'react'
import { ThemeProvider, CssBaseline, Theme as MuiTheme, GlobalStyles } from '@mui/material'
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
			<GlobalStyles 
				styles={{
					body: {
						'&::-webkit-scrollbar-track': {
							background: 'transparent'
						},
						'&::-webkit-scrollbar-thumb': {
							backgroundColor: theme.palette.action.disabled,
							borderBottomLeftRadius: '10px',
							borderBottomRightRadius: '10px',
							borderTopRightRadius: '10px',
							borderTopLeftRadius: '10px',
							'&:hover': {
								backgroundColor: theme.palette.text.secondary
							}
						},
						'&::-webkit-scrollbar': {
							width: '.5rem'
						}
					},
					/* CKEditor */
					':root' : {
						'--ck-custom-background-hover': theme.palette.action.focus,
						'--ck-custom-background': theme.palette.background.paper,
						'--ck-custom-foreground': theme.palette.text.primary,
						'--ck-custom-border': theme.palette.divider,
						'--ck-color-base-foreground': 'var(--ck-custom-foreground) !important',
						'--ck-color-base-background': 'var(--ck-custom-background) !important',
						'--ck-color-base-border': 'var(--ck-custom-border) !important',
						'--ck-color-base-text': 'var( --ck-custom-foreground ) !important',
						'--ck-color-button-default-hover-background': 'var(--ck-custom-background-hover) !important'
					}
				}}
			/>
			{ children }
		</ThemeProvider>
	)
}