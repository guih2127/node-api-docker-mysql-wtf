export default class BaseResult<T> {
    statusCode: number;
    responseObject?: T;
    message?: string;

    constructor(statusCode: number, responseObject?: T, message?: string) {
        this.statusCode = statusCode;
        this.responseObject = responseObject;
        this.message = message;
    }
}