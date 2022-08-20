import { FC } from 'react'
/*  */
import { Footer, Navbar } from '../components'
import { ThemeLayout } from './ThemeLayout'


interface Props {
	children: JSX.Element | JSX.Element[]
}
export const MainLayout: FC<Props> = ({ children }) => {

	return (
		<ThemeLayout >
			<>
				<Navbar />
				{ children }
				<Footer />
			</>
		</ThemeLayout>
	)
}