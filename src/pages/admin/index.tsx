import { NextPage, GetServerSideProps } from 'next'
import { getSession } from 'next-auth/react'
/*  */
import { IUser } from '../../interfaces'
/*  */
import { ThemeLayout } from '../../layouts'


interface Props {
	
}
const Dashboard: NextPage<Props> = () => {

	return (
		<ThemeLayout>
			<div>Hola de nuevo</div>
		</ThemeLayout>
	)
}

export const getServerSideProps: GetServerSideProps = async ({ req, query }) => {

	const session = await getSession({ req })
	const admitedRoles = [ 'admin' ]
	const { p = '/' } = query

	if( !session ) {

		return {
			redirect: {
				destination: `/?p=${ p }`,
				permanent: false
			}
		}
	}

	const user = session.user as IUser
	
	if( !admitedRoles.includes( user.role ) ) {

		return {
			redirect: {
				destination: '/',
				permanent: false
			}
		}
	}

	return {
		props: {
			
		}
	}
}

export default Dashboard