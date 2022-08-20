import { configureStore } from '@reduxjs/toolkit'
/*  */
import { themeReducer, userReducer, appReducer } from './slices'


export const store = configureStore({
	reducer: {
		theme: themeReducer,
		user: userReducer,
		app: appReducer
	}
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch