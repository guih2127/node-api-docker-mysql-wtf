import BaseResult from "./base.result";

export default class FailResult<T> extends BaseResult<T> {
    message: string;

    constructor(statusCode: number, message: string) {
        super(statusCode);
        this.message = message;
    }
}
