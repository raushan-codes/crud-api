import { Request, Response } from 'express'
import CustomError from './customError';

export function asyncHandler(fn: (req: Request, res: Response) => Promise<unknown>) {
    return async function (req: Request, res: Response) {
        try {
            await fn(req, res);
        } catch (error: any) {
            if (error instanceof CustomError) {
                res.status(error.statusCode || 500).json({
                    success: false,
                    message: error.message,
                });
            } else {
                console.error('Unhandled Error:', error);
                res.status(500).json({
                    success: false,
                    message: 'Internal Server Error',
                });
            }
        }
    }
}