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
		case 'GET':
			return get( req, res )

		case 'PUT':
			return put( req, res )

		case 'DELETE':
			return deleteProject( req, res )

		default:
			return res.status( 400 ).json({ msg: 'Not allowed method' })
	}
}

const get = async ( req: NextApiRequest, res: NextApiResponse<Data> ) => {

	const id = req.query.id as string

	try {

		await db.connect()

		const project = await Project.findById( id )
		
		await db.disconnect()

		if( !project ) return res.status( 201 ).json({ msg: 'No data' })

		return res.status( 201 ).json({ project })
	} catch ( error ) {
		
		console.log("🚀 ~ file: index.ts ~ line 47 ~ post ~ error", error)
		await db.disconnect()
		return res.status( 500 ).json({ msg: 'Oops! Algo salio mal!' })
	}
}

const put = async ( req: NextApiRequest, res: NextApiResponse<Data> ) => {

	const id = req.query.id as string
	const {
		description = '',
		githubUrl = '',
		title = '',
		image = '',
		viewUrl = ''
	} = req.body

	try {

		await db.connect()

		const project = await Project.findByIdAndUpdate( id, {
			$set: {
				description,
				githubUrl,
				title,
				image,
				viewUrl
			}
		}, { new: true })

		await db.disconnect()
		return res.status( 201 ).json({
			msg: 'Producto actualizado',
			project
		})
	} catch ( error ) {
		
		console.log("🚀 ~ file: index.ts ~ line 47 ~ post ~ error", error)
		await db.disconnect()
		return res.status( 500 ).json({ msg: 'Oops! Algo salio mal!' })
	}
}

const deleteProject = async ( req: NextApiRequest, res: NextApiResponse<Data> ) => {

	const id = req.query.id as string

	try {

		await db.connect()
		await Project.findByIdAndDelete( id )
		await db.disconnect()

		return res.status( 201 ).json({
			msg: 'Producto eliminado'
		})
	} catch ( error ) {
		
		console.log("🚀 ~ file: index.ts ~ line 47 ~ post ~ error", error)
		await db.disconnect()
		return res.status( 500 ).json({ msg: 'Oops! Algo salio mal!' })
	}
}

export default api