import { 
	Box
} from '@mui/material'
import { NextPage, GetServerSideProps } from 'next'
import { getSession } from 'next-auth/react'
/*  */
import { IUser } from '../../interfaces'
/*  */
import { AdminLayout } from '../../layouts'


interface Props {

}
const Dashboard: NextPage<Props> = ({  }) => {

	return (
		<AdminLayout>
			<Box sx={{ display: 'flex' }}>
			</Box>
		</AdminLayout>
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