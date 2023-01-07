import BaseResponse from "./base.response";

export default class SuccessResponse<T> extends BaseResponse<T> {
    responseObject: T;

    constructor(statusCode: number, responseObject: T) {
        super(statusCode);
        this.responseObject = responseObject;
    }
}