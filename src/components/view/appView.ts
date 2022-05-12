import News from './news/news';
import Sources from './sources/sources';
import { IResponseNews, IResponseSources } from '../../interfaces/interfacesAppView';

export class AppView {
    constructor(private news: News = new News(), private sources: Sources = new Sources()) {}

    drawNews(data: IResponseNews) {
        const values = data?.articles ? data?.articles : [];
        this.news.draw(values);
    }

    drawSources(data: IResponseSources) {
        const values = data.sources ? data?.sources : [];
        this.sources.draw(values);
    }
}

export default AppView;
