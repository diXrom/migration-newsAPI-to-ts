export default interface IResponseConfig {
    endpoint: string;
    options: {
        sources?: string;
        apiKey?: string;
    };
}
