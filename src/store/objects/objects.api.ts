import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { type ObjectItem } from 'src/types/objects'

export const objectsApi = createApi({
	reducerPath: 'objects/api',
	baseQuery: fetchBaseQuery({
		baseUrl: import.meta.env.VITE_BASE_URL,
	}),
	endpoints: (build) => ({
		getObjects: build.query<ObjectItem[], string>({
			query: (search) => ({
				url: `/objects`,
				params: {
					q: search,
				},
			}),
		}),
	}),
})

export const { useGetObjectsQuery } = objectsApi
