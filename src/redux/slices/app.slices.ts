import { createSlice, PayloadAction } from '@reduxjs/toolkit'
/*  */
import { IApp } from '../../interfaces'


const initialState: IApp = {
	isMenuOpen: false
} 

const appSlice = createSlice({
	name: 'app',
	initialState,
	reducers: {
		appToggleMenu: state => { state.isMenuOpen = !state.isMenuOpen }
	}
})

export const {
	appToggleMenu
} = appSlice.actions
export const appReducer = appSlice.reducer