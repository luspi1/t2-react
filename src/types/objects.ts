export type ObjectItemStatus = {
	statusProperty?: string
	statusContent?: string
}

export type ObjItem = {
	id: number
	objectCode: string
	objectSize: number
	objectPriceInRubles: number
	auctionObjectStatus: ObjectItemStatus
	objectInnerDescription: string
	objectAddressRU: string
	objectAuctionNumber: string | null
	isObjAuc: string
}

export type ObjFiltrationParams = {
	search: string
	status: string
	auc: string
}
