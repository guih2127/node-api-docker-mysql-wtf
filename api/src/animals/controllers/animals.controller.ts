import express from 'express';
import FailResponse from '../../responses/fail.response';
import SuccessResponse from '../../responses/success.response';
import { AnimalDto } from '../dtos/animal.dto';
import { IAnimalsService } from '../services/interfaces/animals.service';

export class AnimalsController {
    private readonly animalsService: IAnimalsService;

    constructor(animalsService: IAnimalsService) {
        this.animalsService = animalsService;
    }

    public async GetAllAnimals(req: express.Request, res: express.Response): Promise<void> {
        const response = await this.animalsService.GetAll();

        if (response instanceof SuccessResponse)
            res.status(response.statusCode).send(response.responseObject);
        else if (response instanceof FailResponse)
            res.status(response.statusCode).json({ message: response.message }).send()
    }

    public async InsertAnimal(req: express.Request, res: express.Response): Promise<void> {
        const animalBody = req.body as AnimalDto;
        const response = await this.animalsService.Insert(animalBody);

        if (response instanceof SuccessResponse)
            res.status(response.statusCode).send(response.responseObject);
        else if (response instanceof FailResponse)
            res.status(response.statusCode).json({ message: response.message }).send()
    }

    public async GetAnimalById(req: express.Request, res: express.Response): Promise<void> {
        const response = await this.animalsService.GetById(req.params.id);

        if (response instanceof SuccessResponse)
            res.status(response.statusCode).send(response.responseObject);
        else if (response instanceof FailResponse)
            res.status(response.statusCode).json({ message: response.message }).send();
    }

    public async DeleteAnimal(req: express.Request, res: express.Response): Promise<void> {
        const response = await this.animalsService.Delete(req.params.id);

        if (response instanceof SuccessResponse)
            res.status(response.statusCode).send(response.responseObject);
        else if (response instanceof FailResponse)
            res.status(response.statusCode).json({ message: response.message }).send()
    }
}