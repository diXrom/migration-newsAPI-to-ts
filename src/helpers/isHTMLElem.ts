export default function isHTMLElem<T>(elem: T | HTMLElement): elem is HTMLElement {
    return elem instanceof EventTarget;
}
