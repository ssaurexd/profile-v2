import { FC, useEffect } from 'react'
import { useSession } from 'next-auth/react'
/*  */
import { useAppDispatch } from '../hooks'
import { IUser } from '../interfaces'
import { setUser } from '../redux'


interface Props {
	children: JSX.Element | JSX.Element[]
}
export const AuthProvider: FC<Props> = ({ children }) => {

	const dispatch = useAppDispatch()
	const { status, data } = useSession()

	/* effects */
	useEffect( () => {

		if( status === 'authenticated' ) {

			const user: IUser = {
				...data.user as IUser,
				isOnline: true
			}

			localStorage.setItem( 'token', user.token )
			dispatch( setUser( user ) )
		}
	}, [ status, data?.user, dispatch ])

	return (
		<>
			{ children }
		</>
	)
}