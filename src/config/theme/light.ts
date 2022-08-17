import { createTheme, responsiveFontSizes } from '@mui/material'


export let lightTheme = createTheme({
	palette: {
		mode: 'light'
	}
})

lightTheme = responsiveFontSizes( lightTheme )