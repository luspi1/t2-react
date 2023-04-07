export type ObjectItemStatus = {
	statusProperty?: string
	statusContent?: string
}

export type ObjectItem = {
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

export type ObjStatus = 'all' | 'inWork' | 'await' | 'sold' | 'draft' | undefined
export type AucStatus = 'all' | 'onAuc' | 'withoutAuc' | undefined
