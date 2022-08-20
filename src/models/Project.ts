import { models, Schema, model } from 'mongoose'
/*  */
import { IProjectBack, IProjectMethods, ProjectModel } from '../interfaces'


const projectSchema = new Schema<IProjectBack, ProjectModel, IProjectMethods>({
	title: {
		required: true,
		type: String
	},
	description: {
		required: true,
		type: String
	},
	image: {
		required: true,
		type: String
	},
	githubUrl: {
		type: String
	},
	viewUrl: {
		type: String
	}
}, {
	timestamps: true
})


/* Quitar el password del documento */
projectSchema.set( 'toJSON', {
	transform( doc, ret ) {
		delete ret['__v']
		delete ret['updatedAt']
        return ret
	},
})
/* Acatualizar el campo updatedAt cuando se haga update */
projectSchema.pre( 'updateOne', async function( next ) {

	this.updatedAt = new Date()
	next()
})


export const Project = models.Project as ProjectModel || model<IProjectBack, ProjectModel>( 'Project', projectSchema )