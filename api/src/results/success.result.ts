import BaseResult from "./base.result";

export default class SuccessResult<T> extends BaseResult<T> {
    responseObject: T;

    constructor(statusCode: number, responseObject: T) {
        super(statusCode);
        this.responseObject = responseObject;
    }
}