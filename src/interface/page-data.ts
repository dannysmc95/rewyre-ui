export interface IPageData {
	meta: Array<IPageDataMeta>;
	scripts: Array<IPageDataScript>;
	styles: Array<IPageDataStyles>;
}

export interface IPageDataMeta {
	property: string;
	content: string;
}

export interface IPageDataScript {
	src: string;
	type?: string;
}

export interface IPageDataStyles {
	src: string;
	type?: string;
}
