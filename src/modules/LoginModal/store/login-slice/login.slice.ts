import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import { NameSpace } from 'src/helpers/consts'
import { ModalStates } from 'src/pages/LoginPage/consts'

type LoginSliceState = {
	modalState: ModalStates
}

const initialState: LoginSliceState = {
	modalState: ModalStates.Main,
}

export const loginSlice = createSlice({
	name: NameSpace.Login,
	initialState,
	reducers: {
		setModalState: (state, action: PayloadAction<ModalStates>) => {
			state.modalState = action.payload
		},
	},
})
export const { setModalState } = loginSlice.actions
export default loginSlice.reducer
