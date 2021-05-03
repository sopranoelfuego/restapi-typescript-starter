import { Request, Response, NextFunction } from 'express';
import log from '../config/log';
const NAMESPACE = 'SAMPLE RUNNING ';
const addBook = (req: Request, res: Response, next: NextFunction) => {
    log.info(NAMESPACE, 'just running the app for testing ');
    res.status(200).json({ success: true, message: 'you hit in!!' });
};
export { addBook };
