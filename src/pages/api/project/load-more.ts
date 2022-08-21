import type { NextApiRequest, NextApiResponse } from 'next'
import { db } from '../../../database';
/*  */
import { IProjectBack } from '../../../interfaces'
import { Project } from '../../../models';

type Data = {
	msg?: string;
	project?: IProjectBack;
	data?: IProjectBack[];
}

const api = ( req: NextApiRequest, res: NextApiResponse<Data> ) => {

	switch ( req.method ) {
		case 'GET':
			return get( req, res )

		default:
			return res.status( 400 ).json({ msg: 'Not allowed method' })
	}
}

const get = async ( req: NextApiRequest, res: NextApiResponse<Data> ) => {

	const page: number = parseInt( req.query.page as any , 10 ) || 0
	const limit: number = parseInt( req.query.limit as any , 10 ) || 3

	try {

		await db.connect()

		const projects = await Project.find({})
			.sort({ createdAt: -1 })
			.skip( page * limit )
			.limit( limit )
			

		await db.disconnect()
		return res.status( 201 ).json({
			data: projects
		})
	} catch ( error ) {
		
		console.log("🚀 ~ file: index.ts ~ line 47 ~ post ~ error", error)
		await db.disconnect()
		return res.status( 500 ).json({ msg: 'Oops! Algo salio mal!' })
	}
}

export default api