import isHTMLElem from '../../helpers/isHTMLElem';
import AppLoader from './appLoader';

class AppController extends AppLoader {
    getSources<T>(callback: (data: T) => void) {
        super.getResp<T>({ endpoint: 'sources' }, callback);
    }

    getNews<T>(e: Event, callback: (data: T) => void) {
        let target = e.target;
        const newsContainer = e.currentTarget;
        while (target !== newsContainer) {
            if (!isHTMLElem(target) || !isHTMLElem(newsContainer)) throw new Error(`This elements is not HTMLElements`);
            if (target.classList.contains('source__item')) {
                const sourceId = target.getAttribute('data-source-id');
                const currentSourceId = newsContainer.getAttribute('data-source');
                if (sourceId == null) throw new Error(`Could not find this Attribute`);
                if (currentSourceId !== sourceId) {
                    newsContainer.setAttribute('data-source', sourceId);
                    super.getResp<T>({ endpoint: 'everything', options: { sources: sourceId } }, callback);
                }
                return;
            }
            target = target.parentNode;
        }
    }
    postFirstNews<T>(callback: (data: T) => void) {
        super.getResp<T>({ endpoint: 'everything', options: { sources: 'abc-news' } }, callback);
    }
}

export default AppController;
