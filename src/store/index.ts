import { configureStore } from '@reduxjs/toolkit'
import { NameSpace } from '../helpers/consts'
import objectsSlice from '../pages/ObjectsPage/store/ObjectsSlice/objects.slice'

export const store = configureStore({
	reducer: {
		[NameSpace.Objects]: objectsSlice,
	},
})
