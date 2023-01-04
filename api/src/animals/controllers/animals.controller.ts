import express from 'express';
import { IAnimalsService } from '../services/interfaces/animals.service';

export class AnimalsController {
    private readonly animalsService: IAnimalsService;

    constructor(animalsService: IAnimalsService) {
        this.animalsService = animalsService;
    }

    async listAllPets(req: express.Request, res: express.Response): Promise<void> {
        const animals = await this.animalsService.getAll();
        res.status(201).send(animals);
    }
}