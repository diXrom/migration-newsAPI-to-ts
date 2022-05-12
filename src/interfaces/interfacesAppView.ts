import INews from './interfaceNews';
import ISources from './interfaceSources';

export interface IResponseNews {
    articles: INews[];
}
export interface IResponseSources {
    sources: ISources[];
}
