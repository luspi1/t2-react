import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import { AucStatuses, NameSpace, ObjectsStatuses } from '../../../../helpers/consts'
import { type ObjectItem } from '../../../../types/objects'
import { objects } from '../../../../mocks/objects'

type ObjectsSliceState = {
	objects: ObjectItem[]
	objectStatus?: string
	aucStatus?: string
}

const initialState: ObjectsSliceState = {
	objects: [],
	objectStatus: ObjectsStatuses.all,
	aucStatus: AucStatuses.all,
}

export const objectsSlice = createSlice({
	name: NameSpace.Objects,
	initialState,
	reducers: {
		setAllObjects: (state) => {
			state.objects = objects
		},
		setObjectStatus: (state, action: PayloadAction<string | undefined>) => {
			state.objectStatus = action.payload
		},
		setAucStatus: (state, action: PayloadAction<string | undefined>) => {
			state.aucStatus = action.payload
		},
	},
})
export const { setAllObjects, setObjectStatus, setAucStatus } = objectsSlice.actions
export default objectsSlice.reducer
