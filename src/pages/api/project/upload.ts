import type { NextApiRequest, NextApiResponse } from 'next'
import formidable from 'formidable'
import { v2 as CloudinaryV2 } from 'cloudinary'
/*  */
import { IProjectBack } from '../../../interfaces'


CloudinaryV2.config( process.env.CLOUDINARY_URL || '' )
export const config = {
	api: {
		bodyParser: false
	}
}
type Data = {
	msg?: string;
	project?: IProjectBack;
	data?: IProjectBack[];
}
const api = ( req: NextApiRequest, res: NextApiResponse<Data> ) => {

	switch ( req.method ) {
		case 'POST':
			return post( req, res )

		case 'DELETE':
			return deleteImg( req, res )

		default:
			return res.status( 400 ).json({ msg: 'Not allowed method' })
	}
}

const saveFile = async ( file: formidable.File ) => {

	const { secure_url } = await CloudinaryV2.uploader.upload( file.filepath, { folder: 'profile' } )

	return secure_url
}
const parseFiles = ( req: NextApiRequest ): Promise<string> => {

	return new Promise(( resolve, reject ) => {
		
		const form = new formidable.IncomingForm()

		form.parse( req, async ( err, fields, files ) => {
			
			if( err ) return reject( err )

			const imgUrl = await saveFile( files.file as formidable.File )
			resolve( imgUrl )
		})
	})
}
const post = async ( req: NextApiRequest, res: NextApiResponse<Data> ) => {

	try {

		const imgUrl = await parseFiles( req )

		return res.status( 200 ).json({
			msg: imgUrl,
		})
	} catch ( error ) {

		console.log("🚀 ~ file: upload.ts ~ line 81 ~ post ~ error", error)
		return res.status( 500 ).json({ msg: 'Oops! Algo salio mal!' })
	}
}

const deleteImg = async ( req: NextApiRequest, res: NextApiResponse<Data> ) => {

	try {

		const imgUrl = req.query.image as string
		const public_id = imgUrl.split( '/' ).at( -1 )?.split( '.' )[0] as string
		console.log("🚀 ~ file: upload.ts ~ line 76 ~ deleteImg ~ public_id", public_id)

		await CloudinaryV2.uploader.destroy( public_id, ( err, resp ) => {
		console.log("🚀 ~ file: upload.ts ~ line 79 ~ awaitCloudinaryV2.uploader.destroy ~ resp", resp)
		console.log("🚀 ~ file: upload.ts ~ line 79 ~ awaitCloudinaryV2.uploader.destroy ~ err", err)

		})

		return res.status( 200 ).json({
			msg: 'Imagen eliminada',
		})
	} catch ( error ) {

		console.log("🚀 ~ file: upload.ts ~ line 81 ~ post ~ error", error)
		return res.status( 500 ).json({ msg: 'Oops! Algo salio mal!' })
	}
}

export default api