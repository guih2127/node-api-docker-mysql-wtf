export default abstract class BaseResponse<T> {
    statusCode: number;

    constructor(statusCode: number) {
        this.statusCode = statusCode;
    }
}