import '../styles/index.scss'
import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import { SessionProvider } from 'next-auth/react'
/*  */
import { store } from '../redux'
import { AuthProvider } from '../contexts'
import { SnackbarProvider } from 'notistack'

const App = ({ Component, pageProps }: AppProps) => {
	
	return (
		<SessionProvider>
			<Provider store={store}>
				<AuthProvider>
					<SnackbarProvider maxSnack={ 4 } >
						<Component {...pageProps} />
					</SnackbarProvider>
				</AuthProvider>
			</Provider>
		</SessionProvider>
	)
}

export default App