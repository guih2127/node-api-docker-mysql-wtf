import express from 'express';
import { SendControllerResponse, ValidateBodyAndThrowErrorsIfNecessary } from '../../utils/controller.utils';
import { SaveAnimalDto } from '../dtos/save.animal.dto';
import { IAnimalsService } from '../services/interfaces/animals.service';

export class AnimalsController {
    private readonly animalsService: IAnimalsService;

    constructor(animalsService: IAnimalsService) {
        this.animalsService = animalsService;
    }

    public async GetAllAnimals(req: express.Request, res: express.Response): Promise<void> {
        const result = await this.animalsService.GetAll();
        await SendControllerResponse(res, result);
    }

    public async InsertAnimal(req: express.Request, res: express.Response): Promise<void> {
        await ValidateBodyAndThrowErrorsIfNecessary(SaveAnimalDto, req, res);
        const animalBody = req.body as SaveAnimalDto;
        const result = await this.animalsService.Insert(animalBody);

        await SendControllerResponse(res, result);
    }

    public async GetAnimalById(req: express.Request, res: express.Response): Promise<void> {
        const result = await this.animalsService.GetById(req.params.id);
        await SendControllerResponse(res, result);
    }

    public async DeleteAnimal(req: express.Request, res: express.Response): Promise<void> {
        const result = await this.animalsService.Delete(req.params.id);
        await SendControllerResponse(res, result);
    }
}