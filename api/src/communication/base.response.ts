class BaseResponse<T> {
    public success: boolean;
    public message: string | undefined;
    public object: T | undefined;

    constructor(success: boolean, message?: string, object?: T) {
        this.success = success;
        this.message = message;
        this.object = object;
    }
}