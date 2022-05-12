export default function getElement<T extends HTMLElement>(
    selector: string,
    node: Document | HTMLElement = document
): T {
    const elem = node.querySelector<T>(selector);
    if (elem == null) throw new Error(`Could not find this element`);
    return elem;
}
