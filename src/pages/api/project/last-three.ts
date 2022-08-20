import type { NextApiRequest, NextApiResponse } from 'next'
/*  */
import { db } from '../../../database'
import { IProjectBack } from '../../../interfaces'
import { Project } from '../../../models'

type Data = {
	projects?: IProjectBack[],
	msg?: string
}

const api = ( req: NextApiRequest, res: NextApiResponse<Data> ) => {

	switch ( req.method ) {
		case 'POST':
			return post( req, res )
	
		default:
			return res.status( 400 ).json({ msg: 'Not allowed method' })
	}
}

const post = async ( req: NextApiRequest, res: NextApiResponse<Data> ) => {
	
	try {
		
		await db.connect()

		const projects = await Project.find({}).sort({ createdAt: -1 }).limit( 3 )
		
		await db.disconnect()
		return res.status( 200 ).json({ projects })
	} catch ( error ) {
		
        console.log("🚀 ~ file: lastest-three.ts ~ line 26 ~ post ~ error", error)
		await db.disconnect()
		return res.status( 500 ).json({ msg: 'Oops! Algo salio mal!' })
	}
}

export default api