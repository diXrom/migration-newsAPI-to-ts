import getElement from '../../services/getElem';
import ISources from './interfaceSources';
import './sources.css';

class Sources {
    draw(data: ISources[]) {
        const sources = data.length >= 9 ? data.filter((_item, idx) => idx < 9) : data;

        const fragment = document.createDocumentFragment();
        const sourceItemTemp = getElement<HTMLTemplateElement>('#sourceItemTemp');

        sources.forEach((item) => {
            const sourceClone = <HTMLDivElement>sourceItemTemp.content.cloneNode(true);

            getElement('.source__item-name', sourceClone).textContent = item.name;
            getElement('.source__item', sourceClone).setAttribute('data-source-id', item.id);

            fragment.append(sourceClone);
        });

        getElement('.sources').append(fragment);
    }
}

export default Sources;
