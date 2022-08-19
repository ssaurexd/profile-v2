import type { NextApiRequest, NextApiResponse } from 'next'
import { authDB } from '../../../database'

type Data = {
	name: string
}

const user = async ( req: NextApiRequest, res: NextApiResponse<Data> ) => {

	res.status(200).json({ name: 'Example' })
}

export default user