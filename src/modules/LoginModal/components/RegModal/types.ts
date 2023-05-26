export type BankAccounts = {
	accountNumber: string
	bankMFO: string
	bankName_RU: string
	checkingAccount: string
	bankDateAdded: string
	bankDateEnded: string
}
export type Documents = {
	scanFiles: any
	scans: string
	description: string
}

export type RegForm = {
	name_RU: string
	secondName_RU: string
	patronymicName_RU: string
	email: string
	password: string
	passwordRepeat: string
	dataBirth: string
	placeOfBirth_RU: string
	inn: string
	seriesAndNumber: string
	issuedBy_RU: string
	dateOfIssue: string
	validity: string
	placeOfPermanentReg_RU: string
	mobileNumber: string
	bankAccounts: BankAccounts
	documents: Documents
}
