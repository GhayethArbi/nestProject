import { Injectable, NestMiddleware } from "@nestjs/common";
import { NextFunction } from "express";

@Injectable()
export class UserMiddelware implements NestMiddleware{
    use(req: any, res: any, next: NextFunction ){
        try {
            next();
        } catch (error) {
            console.error('Une erreur est survenue:', error.message);
            res.status(500).json({ message: 'Une erreur est survenue.', error: error.message });
        }
    }
    
}