import express from 'express';
import { IAnimalsService } from '../services/animals.service';

export class AnimalsController {
    private readonly animalsService: IAnimalsService;

    constructor(animalsService: IAnimalsService) {
        this.animalsService = animalsService;
    }

    // todo - type this method
    async listAllPets(req: express.Request, res: express.Response) {
        const animals = await this.animalsService.getAll();
        res.status(201).send(animals);
    }
}