import jwt from 'jsonwebtoken'
/*  */
import { db } from '.'
import { User } from '../models'


export const sigInWithOAuth = async ( email: string, name: string ) => {

	try {
		
		await db.connect()

		const user = await User.findOne({ email })

		if( user ) {

			const token = jwt.sign({ uid: user._id }, process.env.JWT_SEED!, { expiresIn: '30d' } )
			
			await db.disconnect()
			return {
				_id: user._id,
				email: user.email,
				role: user.role,
				name: user.name,
				token
			}
		}

		const newUser = await User.create({
			email,
			name,
			password: '@'
		})
		const token = jwt.sign({ uid: newUser._id }, process.env.JWT_SEED!, { expiresIn: '30d' } )
		
		await db.disconnect()
		return {
			_id: newUser._id,
			email: newUser.email,
			role: newUser.role,
			name: newUser.name,
			token
		}
	} catch ( error ) {
		
        console.log("🚀 ~ file: datasabe.ts ~ line 36 ~ sigInWithOAuth ~ error", error)
		await db.disconnect()
		throw new Error('Oops! Algo salio mal')
	}
}