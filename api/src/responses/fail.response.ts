import BaseResponse from "./base.response";

export default class FailResponse<T> extends BaseResponse<T> {
    message: string;

    constructor(statusCode: number, message: string) {
        super(statusCode);
        this.message = message;
    }
}
