export type Inputs = {
	objPrice: {
		uzb: number
		ru: number
		usd: number
		cny: number
	}
	objTitle: {
		uzb: string
		ru: string
	}
	objAddress: {
		uzb: string
		ru: string
	}
	objFoundation: {
		docType: string
		docNumber: number
		docSignDate: string
		docPublisher: string
	}
	objDescription: {
		descUzb: string
		descRu: string
		innerComment: string
	}
}
