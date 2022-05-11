import Loader from './loader';

class AppLoader extends Loader {
    constructor() {
        super('https://newsapi.org/v2/', {
            apiKey: '25f01c7af9f444aabffb501c18d5f968',
        });
    }
}

export default AppLoader;
