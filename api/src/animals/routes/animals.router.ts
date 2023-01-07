import express from 'express';
import animalsFactory from '../factories/animals.factory';

export const animalsRouter = express.Router();

animalsRouter.get(`/`, (req: express.Request, res: express.Response) => {
    animalsFactory.GetAllAnimals(req, res) 
});

animalsRouter.get(`/:id`, (req: express.Request, res: express.Response) => {
    animalsFactory.GetAnimalById(req, res) 
});

animalsRouter.post(`/`, (req: express.Request, res: express.Response) => {
    animalsFactory.InsertAnimal(req, res) 
});

animalsRouter.delete(`/`, (req: express.Request, res: express.Response) => {
    animalsFactory.DeleteAnimal(req, res) 
});

export default animalsRouter;