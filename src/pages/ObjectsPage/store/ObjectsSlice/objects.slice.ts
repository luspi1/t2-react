// import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
// import { AucStatuses, NameSpace, ObjectsStatuses } from 'src/helpers/consts'
// import { type ObjectItem } from 'src/types/objects'
//
// type ObjectsSliceState = {
// 	objects: ObjectItem[]
// 	objectStatus?: string
// 	aucStatus?: string
// 	searchObj: string
// }
//
// const initialState: ObjectsSliceState = {
// 	objects: [],
// 	objectStatus: ObjectsStatuses.all,
// 	aucStatus: AucStatuses.all,
// 	searchObj: '',
// }
//
// export const objectsSlice = createSlice({
// 	name: NameSpace.Objects,
// 	initialState,
// 	reducers: {
// 		setAllObjects: (state) => {
// 			state.objects = []
// 		},
// 		setObjectStatus: (state, action: PayloadAction<string | undefined>) => {
// 			state.objectStatus = action.payload
// 		},
// 		setAucStatus: (state, action: PayloadAction<string | undefined>) => {
// 			state.aucStatus = action.payload
// 		},
// 		setSearchObject: (state, action: PayloadAction<string>) => {
// 			state.searchObj = action.payload
// 		},
// 		addObject: (state, action: PayloadAction<ObjectItem>) => {
// 			state.objects.push(action.payload)
// 		},
// 	},
// })
// export const { addObject, setAllObjects, setObjectStatus, setAucStatus, setSearchObject } =
// 	objectsSlice.actions
// export default objectsSlice.reducer
