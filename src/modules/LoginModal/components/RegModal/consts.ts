type RegNameMap = Record<number, string[]>

export const NameMap: RegNameMap = {
	1: ['secondName_RU', 'name_RU', 'patronymicName_RU', 'dataBirth', 'placeOfBirth_RU', 'inn'],
	2: ['seriesAndNumber', 'issuedBy_RU', 'dateOfIssue', 'validity', 'placeOfPermanentReg_RU'],
	3: [
		'accountNumber',
		'bankMFO',
		'bankName_RU',
		'checkingAccount',
		'bankDateEnded',
		'bankDateAdded',
	],
	4: ['scans', 'docDescription'],
}
