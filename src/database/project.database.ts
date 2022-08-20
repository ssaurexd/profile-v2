import { db } from '.'
import { Project } from '../models'



export const getLastThreeProjectes = async (  ) => {
	
	await db.connect()

	const projects = await Project.find({}).sort({ createdAt: -1 }).limit( 3 ).lean()
	
	await db.disconnect()
	return JSON.parse( JSON.stringify( projects ) )
}