import { type State } from 'src/types/state'
import { AucStatuses, NameSpace, ObjectsStatuses } from 'src/helpers/consts'
import { createSelector } from '@reduxjs/toolkit'

export const getAllObjects = (state: State) => state[NameSpace.Objects].objects

export const getObjectById = (id?: number) => (state: State) => {
	return state[NameSpace.Objects].objects.find((el) => el.id === id)
}

const getObjectsStatus = (state: State) => state[NameSpace.Objects].objectStatus

const getObjectsAuc = (state: State) => state[NameSpace.Objects].aucStatus

const getSearchText = (state: State) => state[NameSpace.Objects].searchObj

export const getAllFilteredObjects = createSelector(
	[getAllObjects, getObjectsStatus, getObjectsAuc, getSearchText],
	(allObjects, statusObjects, aucObjects, searchText) => {
		return allObjects.filter((el) => {
			return (
				(el.auctionObjectStatus.statusProperty === statusObjects ||
					statusObjects === ObjectsStatuses.all) &&
				(el.isObjAuc === aucObjects || aucObjects === AucStatuses.all) &&
				(el.objectCode.includes(searchText) || searchText === '')
			)
		})
	}
)
