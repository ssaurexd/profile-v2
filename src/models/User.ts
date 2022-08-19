import { models, Schema, model } from 'mongoose'
import bcrypt from 'bcrypt'
/*  */
import { IUserBack, IUserMethods, UserModel } from '../interfaces'


const userSchema = new Schema<IUserBack, UserModel, IUserMethods>({
	name: {
		type: String,
		required: true
	},
	email: {
		type: String,
		required: true,
		unique: true,
		lowercase: true
	},
	password: {
		type: String,
		required: true
	},
	role: {
		type: String,
		enum: [ 'user', 'admin' ],
		default: 'user',
		required: true
	},
	isOnline: {
		type: Boolean,
		required: true,
		default: false
	}
}, {
	timestamps: true
})


/* Quitar el password del documento */
userSchema.set( 'toJSON', {
	transform(doc, ret, options) {
		delete ret['password']
		delete ret['updatedAt']
		delete ret['__v']
		delete ret['createdAt']
        return ret
	},
})
/* Acatualizar el campo updatedAt cuando se haga update */
userSchema.pre( 'updateOne', async function( next ) {

	this.updatedAt = new Date()
	next()
})
/* Verificar si la contraseña es correcta */
userSchema.method( 'comparePassword', async function( password: string ) {

	const isPasswordEqual: boolean = await bcrypt.compare( password, this.password ) 

	return isPasswordEqual
})

/* para encriptar la contraseña */
userSchema.method( 'hashPassword', async function( value: string ) {

	const salt = await bcrypt.genSalt()
	const passwordHashed = await bcrypt.hash( value, salt )

	return passwordHashed
})

export const User = models.User as UserModel || model<IUserBack, UserModel>( 'User', userSchema )