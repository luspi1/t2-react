import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

import { type ObjFiltrationParams, type ObjItem } from 'src/types/objects'

export const objectsApi = createApi({
	reducerPath: 'objects/api',
	baseQuery: fetchBaseQuery({
		baseUrl: import.meta.env.VITE_BASE_URL,
	}),
	endpoints: (build) => ({
		getObjects: build.query<ObjItem[], ObjFiltrationParams>({
			query: (filtrationParams) => ({
				url: `/objects?${filtrationParams.auc ? '&isObjAuc=' + filtrationParams.auc : ''}${
					filtrationParams.status
						? '&auctionObjectStatus.statusProperty=' + filtrationParams.status
						: ''
				}`,
				params: {
					q: filtrationParams.search,
				},
			}),
		}),
		getObjectById: build.query<ObjItem, number>({
			query: (id) => ({
				url: `/objects/${id}`,
			}),
		}),
	}),
})

export const { useGetObjectsQuery, useGetObjectByIdQuery } = objectsApi
