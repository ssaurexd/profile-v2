import { createSlice, PayloadAction } from '@reduxjs/toolkit'
/*  */
import { IUser } from '../../interfaces'


const initialState: IUser = {
	_id: '',
	email: '',
	name: '',
	role: 'user',
	token: '',
	isOnline: true
} 

const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		setUser: ( state, actions: PayloadAction<IUser> ) => {
			return actions.payload
		},
		logout: state => {
			localStorage.removeItem( 'token' )
			return {
				...initialState
			}
		}
	}
})

export const {
	logout,
	setUser
} = userSlice.actions
export const userReducer = userSlice.reducer