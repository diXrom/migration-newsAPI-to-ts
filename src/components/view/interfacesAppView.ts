import INews from './news/interfaceNews';
import ISources from './sources/interfaceSources';

export interface IResponseNews {
    articles: INews[];
}
export interface IResponseSources {
    sources: ISources[];
}
