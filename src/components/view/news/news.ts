import './news.css';
import getElement from '../../../helpers/getElem';
import INews from '../../../interfaces/interfaceNews';
import isHTMLElem from '../../../helpers/isHTMLElem';

class News {
    draw(data: INews[]) {
        const news = data.length >= 10 ? data.filter((_item, idx) => idx < 10) : data;
        const fragment = document.createDocumentFragment();
        const newsItemTemp = getElement<HTMLTemplateElement>('#newsItemTemp');

        news.forEach((item, idx) => {
            const newsClone = newsItemTemp.content.cloneNode(true);
            if (!isHTMLElem(newsClone)) throw new Error(`This element is not HTMLElement`);
            if (idx % 2) getElement('.news__item', newsClone).classList.add('alt');

            getElement('.news__meta-photo', newsClone).style.backgroundImage = `url(${
                item.urlToImage || 'img/news_placeholder.jpg'
            })`;
            getElement('.news__meta-author', newsClone).textContent = item.author || item.source.name;
            getElement('.news__meta-date', newsClone).textContent = item.publishedAt
                .slice(0, 10)
                .split('-')
                .reverse()
                .join('-');
            getElement('.news__description-title', newsClone).textContent = item.title;
            getElement('.news__description-source', newsClone).textContent = item.source.name;
            getElement('.news__description-content', newsClone).textContent = item.description;
            getElement('.news__read-more a', newsClone).setAttribute('href', item.url);
            fragment.append(newsClone);
        });
        getElement('.news').innerHTML = '';
        getElement('.news').appendChild(fragment);
    }
}
export default News;
