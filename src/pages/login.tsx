import { NextPage, GetServerSideProps } from 'next'
import { getSession, signIn } from 'next-auth/react'
import { Button } from '@mui/material'


interface Props {
	
}
const LoginPage: NextPage<Props> = () => {

	/* functions */
	const onSigninWithGoogle =  async (  ) => {
		
		await signIn( 'google' )
	}

	return (
		<Button onClick={ onSigninWithGoogle } >Google</Button>
	)
}

export const getServerSideProps: GetServerSideProps = async ({ req, query }) => {
	
	const session = await getSession({ req })
	const { p = '/' } = query

	if( session ) {

		return {
			redirect: {
				destination: `${ p }`,
				permanent: false
			}
		}
	}

	return {
		props: {}
	}
}

export default LoginPage