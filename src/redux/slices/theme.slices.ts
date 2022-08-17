import { createSlice, PayloadAction } from '@reduxjs/toolkit'
/*  */
import { IThemeApp, IThemeOption } from '../../interfaces'


const initialState: IThemeApp = {
	type: 'dark'
} 

const themeSlice = createSlice({
	name: 'theme',
	initialState,
	reducers: {
		themeToggle: ( state, actions: PayloadAction<IThemeOption|undefined>  ) => {
			
			if( actions?.payload ) {

				state.type = actions.payload
				localStorage.setItem( 'theme', actions.payload )
			} 
			else if( state.type === 'light' ){

				state.type = 'dark'
				localStorage.setItem( 'theme', 'dark' )
			} else {

				state.type = 'light'
				localStorage.setItem( 'theme', 'light' )
			} 
		}
	}
})

export const {
	themeToggle
} = themeSlice.actions
export const themeReducer = themeSlice.reducer