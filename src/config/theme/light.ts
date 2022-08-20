import { createTheme, responsiveFontSizes } from '@mui/material'


export let lightTheme = createTheme({
	palette: {
		mode: 'light',
		background: {
			default: '#f2f2f2',
			paper: '#fff'
		},
		primary: {
			main: '#f44336'
		}
	}
})

lightTheme = responsiveFontSizes( lightTheme )