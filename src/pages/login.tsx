import { NextPage, GetServerSideProps } from 'next'
import { getSession, signIn, getProviders } from 'next-auth/react'
import { Button } from '@mui/material'
import { useRouter } from 'next/router'


interface Props {
	
}
const LoginPage: NextPage<Props> = () => {

	const router = useRouter()

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