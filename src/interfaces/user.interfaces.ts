import { Document, Model } from 'mongoose'


export interface IUser{
	_id: string;
	name: string;
	email: string;
	token: string;
	role: IRoles;
	isOnline: boolean;
}

export interface IUserBack {
	_id?:string; 
	email: string;
	password: string;
	name: string;
	createdAt?: Date;
	updatedAt?: Date;
	role: IRoles,
	isOnline: boolean;
}
export type IRoles = 'user' |  'admin'
export interface IUserMethods {
	comparePassword: ( password: string ) => Promise<boolean>;
	hashPassword: ( value: string ) => Promise<string>
}
export type UserModel = Model<IUserBack, {}, IUserMethods, {}, Document>