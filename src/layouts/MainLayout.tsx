import { FC, ReactElement } from 'react'
import { Navbar } from '../components'
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
			</>
		</ThemeLayout>
	)
}