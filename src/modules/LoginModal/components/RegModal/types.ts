export type BankAccounts = {
	accountNumber: string
	bankMFO: string
	bankName_RU: string
	checkingAccount: string
	bankDateAdded: Date
	bankDateEnded: Date
}
export type Documents = {
	scans: string | string[]
	description: string
}

export type RegForm = {
	name_RU: string
	secondName_RU: string
	patronymicName_RU: string
	email: string
	password: string
	dataBirth: Date
	placeOfBirth_RU: string
	inn: string
	seriesAndNumber: string
	issuedBy_RU: string
	dateOfIssue: Date
	validity: Date
	placeOfPermanentReg_RU: string
	mobileNumber: string
	bankAccounts: BankAccounts
	documents: Documents
}
