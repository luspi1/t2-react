import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { NameSpace } from 'src/helpers/consts'
import { loginReducer } from 'src/modules/LoginModal/store/login-slice/login.slice'
import { objectsApi } from 'src/store/objects/objects.api'
// import objectsSlice from 'src/pages/ObjectsPage/store/ObjectsSlice/objects.slice'

export const store = configureStore({
	reducer: {
		[objectsApi.reducerPath]: objectsApi.reducer,
		[NameSpace.Login]: loginReducer,
	},
	middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(objectsApi.middleware),
})

setupListeners(store.dispatch)
