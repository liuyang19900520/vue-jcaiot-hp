import { HttpException, HttpStatus } from '@nestjs/common'
export class SystemException extends HttpException {
    private errorMessage: string;
    private errorCode: string;

    constructor(errorCode: string, errorMessage: string, statusCode: HttpStatus) {
        super(errorMessage, statusCode);
        this.errorMessage = errorMessage;
        this.errorCode = errorCode;
    }

    getErrorCode(): string {
        return this.errorCode;
    }

    getErrorMessage(): string {
        return this.errorMessage;
    }
}