export enum AppRoute {
	Main = '/',
	Org = '/organizations',
	Auc = '/auctions',
	Obj = '/objects',
	ObjCreate = '/objects/create',
	ObjItem = '/objects/:objId',
	InfoDoc = '/info-docs',
}

export enum NameSpace {
	Objects = 'OBJECTS',
}

export enum ObjectsStatuses {
	all = 'all',
	work = 'inWork',
	await = 'await',
	sold = 'sold',
	draft = 'draft',
}

export enum AucStatuses {
	all = 'all',
	onAuc = 'onAuc',
	withoutAuc = 'withoutAuc',
}

export enum ObjectsStatusesContent {
	work = 'Объект в работе',
	await = 'Ожидает',
	sold = 'Продан',
	draft = 'Черновик',
}
