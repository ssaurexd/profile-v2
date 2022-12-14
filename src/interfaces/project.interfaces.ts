import { Document, Model } from 'mongoose'


export interface IProject {
	_id: string;
	title: string;
	image: string;
	githubUrl?: string;
	viewUrl?: string;
	createdAt?: Date;
	description: string;
}

export interface IProjectBack {
	_id?: string;
	title: string;
	image: string;
	githubUrl?: string;
	viewUrl?: string;
	description: string;
	createdAt: Date;
	updatedAt: Date;
}
export interface IProjectMethods {
}
export type ProjectModel = Model<IProjectBack, Record<string, unknown>, IProjectMethods, Document>