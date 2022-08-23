import { createTheme, responsiveFontSizes } from '@mui/material'


export let lightTheme = createTheme({
	palette: {
		mode: 'light',
		background: {
			default: '#f9f9f9',
			paper: '#fff'
		},
		primary: {
			main: '#009688'
		}
	}
})

lightTheme = responsiveFontSizes( lightTheme )