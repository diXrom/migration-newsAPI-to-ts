import getElement from '../../../helpers/getElem';
import isHTMLElem from '../../../helpers/isHTMLElem';
import ISources from '../../../interfaces/interfaceSources';
import './sources.css';

class Sources {
    draw(data: ISources[]) {
        const sources = data.length >= 9 ? data.filter((_item, idx) => idx < 9) : data;
        const fragment = document.createDocumentFragment();
        const sourceItemTemp = getElement<HTMLTemplateElement>('#sourceItemTemp');

        sources.forEach((item) => {
            const sourceClone = sourceItemTemp.content.cloneNode(true);
            if (!isHTMLElem(sourceClone)) throw new Error(`This element<sourceClone> is not HTMLElement`);
            getElement('.source__item-name', sourceClone).textContent = item.name;
            getElement('.source__item', sourceClone).setAttribute('data-source-id', item.id);

            fragment.append(sourceClone);
        });
        getElement('.sources').append(fragment);
    }
}
export default Sources;
