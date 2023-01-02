import express from 'express';
import animalsFactory from '../factories/animals.factory';

export const animalsRouter = express.Router();

animalsRouter.get(`/`, (req: express.Request, res: express.Response) => {
    animalsFactory.listAllPets(req, res) 
});

export default animalsRouter;