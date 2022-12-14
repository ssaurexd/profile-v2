import type { NextApiRequest, NextApiResponse } from 'next'
import { db } from '../../../database';
/*  */
import { IProjectBack } from '../../../interfaces'
import { Project } from '../../../models';

type Data = {
	msg?: string;
	project?: IProjectBack | null;
	data?: IProjectBack[];
}

const api = ( req: NextApiRequest, res: NextApiResponse<Data> ) => {

	switch ( req.method ) {
		case 'POST':
			return post( req, res )

		case 'GET':
			return get( req, res )

		default:
			return res.status( 400 ).json({ msg: 'Not allowed method' })
	}
}

const get = async ( req: NextApiRequest, res: NextApiResponse<Data> ) => {

	try {

		await db.connect()

		const projects = await Project.find({}).sort({ createdAt: -1 })

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

const post = async ( req: NextApiRequest, res: NextApiResponse<Data> ) => {

	const {
		description = '',
		githubUrl = '',
		title = '',
		image = '',
		viewUrl = ''
	} = req.body

	try {

		await db.connect()

		const project = await Project.create({
			description,
			githubUrl,
			title,
			image,
			viewUrl
		})

		await db.disconnect()
		return res.status( 201 ).json({
			msg: 'Producto Creado',
			project
		})
	} catch ( error ) {
		
		console.log("🚀 ~ file: index.ts ~ line 47 ~ post ~ error", error)
		await db.disconnect()
		return res.status( 500 ).json({ msg: 'Oops! Algo salio mal!' })
	}
}

export default api