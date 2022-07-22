import Loader from './loader';

class AppLoader extends Loader {
    constructor() {
        super('https://nodenews.herokuapp.com/', {
            apiKey: '4d21297620864dcaa868ba5eccb50597',
        });
    }
}

export default AppLoader;
