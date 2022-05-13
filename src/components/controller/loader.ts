import IResponseConfig from '../../interfaces/interfaceLoader';

class Loader {
    constructor(private baseLink: string, private options: { apiKey: string }) {}

    getResp<T>(
        responseConfig: IResponseConfig,
        callback: (data: T) => void = () => console.error('No callback for GET response')
    ) {
        this.load<T>('GET', callback, responseConfig);
    }
    errorHandler(res: Response) {
        if (res.ok) return res;
        if (res.status === 401 || res.status === 404)
            console.log(`Sorry, but there is ${res.status} error: ${res.statusText}`);
        throw Error(res.statusText);
    }

    makeUrl({ endpoint, options = {} }: IResponseConfig) {
        const urlOptions: { [key: string]: string } = { ...this.options, ...options };
        let url = `${this.baseLink}${endpoint}?`;

        Object.keys(urlOptions).forEach((key) => {
            url += `${key}=${urlOptions[key]}&`;
        });

        return url.slice(0, -1);
    }

    load<T>(method: string, callback: (data: T) => void, responseConfig: IResponseConfig) {
        fetch(this.makeUrl(responseConfig), { method })
            .then(this.errorHandler)
            .then((res: Response) => res.json())
            .then((data: T) => callback(data))
            .catch((err: unknown) => console.error(err));
    }
}

export default Loader;
