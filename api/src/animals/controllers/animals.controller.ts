import express from 'express';
import { IAnimalsService } from '../services/interfaces/animals.service';

export class AnimalsController {
    private readonly animalsService: IAnimalsService;

    constructor(animalsService: IAnimalsService) {
        this.animalsService = animalsService;
    }

    async listAnimals(req: express.Request, res: express.Response): Promise<void> {
        const animals = await this.animalsService.GetAll();
        res.status(201).send(animals);
    }
}