import { configureStore } from '@reduxjs/toolkit'
import { NameSpace } from 'src/helpers/consts'
import objectsSlice from 'src/pages/ObjectsPage/store/ObjectsSlice/objects.slice'

export const store = configureStore({
	reducer: {
		[NameSpace.Objects]: objectsSlice,
	},
})
