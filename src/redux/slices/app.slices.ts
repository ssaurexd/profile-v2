import { createSlice, PayloadAction } from '@reduxjs/toolkit'
/*  */
import { IApp } from '../../interfaces'


const initialState: IApp = {
	isMenuOpen: false,
	activeMenu: ''
} 

const appSlice = createSlice({
	name: 'app',
	initialState,
	reducers: {
		appToggleMenu: ( state, { payload }: PayloadAction<boolean|undefined> ) => { 

			if( payload ) state.isMenuOpen = payload
			else state.isMenuOpen = !state.isMenuOpen 
		},
		appSetActiveMenu: ( state, { payload }: PayloadAction<string> ) => {

			state.activeMenu = payload
		}
	}
})

export const {
	appToggleMenu,
	appSetActiveMenu
} = appSlice.actions
export const appReducer = appSlice.reducer