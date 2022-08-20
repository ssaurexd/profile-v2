
import '../styles/index.scss'
import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import { SessionProvider } from 'next-auth/react'
/*  */
import { store } from '../redux'
import { AuthProvider } from '../contexts'


const App = ({ Component, pageProps }: AppProps) => {

	return (
		<SessionProvider>
			<Provider store={ store } >
				<AuthProvider>
					<Component { ...pageProps } />
				</AuthProvider>
			</Provider>
		</SessionProvider>
	) 
}

export default App