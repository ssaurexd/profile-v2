import { createTheme, responsiveFontSizes } from '@mui/material'


export let darkTheme = createTheme({
	palette: {
		mode: 'dark',
		background: {
			default: '#0e0e0e',
			paper: '#141414'
		},
		primary: {
			main: '#00c176'
		}
	},
	components: {
	}
})

darkTheme = responsiveFontSizes( darkTheme )