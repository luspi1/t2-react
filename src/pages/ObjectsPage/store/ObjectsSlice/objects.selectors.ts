import { type State } from '../../../../types/state'
import { NameSpace } from '../../../../helpers/consts'
import { createSelector } from '@reduxjs/toolkit'

export const getAllObjects = (state: State) => state[NameSpace.Objects].objects

export const getObjectById = (id?: number) => (state: State) => {
	return state[NameSpace.Objects].objects.find((el) => el.id === id)
}

const getObjectsStatus = (state: State) => state[NameSpace.Objects].objectStatus

const getObjectsAuc = (state: State) => state[NameSpace.Objects].aucStatus

export const getAllFilteredObjects = createSelector(
	[getAllObjects, getObjectsStatus, getObjectsAuc],
	(allObjects, statusObjects, aucObjects) => {
		if (statusObjects === 'all' && aucObjects === 'all') return allObjects
		return allObjects.filter((el) => {
			return el.auctionObjectStatus.statusProperty === statusObjects || el.isObjAuc === aucObjects
		})
	}
)
