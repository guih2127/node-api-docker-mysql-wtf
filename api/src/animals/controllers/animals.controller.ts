import express from 'express';
import FailResult from '../../results/fail.result';
import { SendControllerResponse, ValidateBody } from '../../utils/controller.utils';
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
        let result;
        const validationResult = await ValidateBody(SaveAnimalDto, req.body);

        if (!validationResult.error) {
            const animalBody = req.body as SaveAnimalDto;
            result = await this.animalsService.Insert(animalBody);
        } else {
            result = new FailResult(400, validationResult.error);
        }

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