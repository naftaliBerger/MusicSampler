import express from "express";
const app = express();
type Request = express.Request;
type Response = express.Response;
type NextFunction = express.NextFunction;

export default function lloger(req: Request, res: Response,next:NextFunction) {
    const now = new Date().toLocaleTimeString();
    console.log(`[${now}] ${req.method} ${req.url}`);
    next();
}
