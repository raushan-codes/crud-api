"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CustomError extends Error {
    constructor(message, statusCode) {
        super(message);
        this.name = 'Custom Error';
        this.statusCode = statusCode;
    }
}
;
exports.default = CustomError;
