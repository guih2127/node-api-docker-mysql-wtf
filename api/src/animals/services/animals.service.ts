import { IModelCreationUtils } from "../../utils/interfaces/model.creation.utils";
import CreateGuid from "../../utils/model.creation.utils";
import { SaveAnimalDto } from "../dtos/save.animal.dto";
import { AnimalModel } from "../models/animals.model";
import { IAnimalsRepository } from "../repositories/interfaces/animals.repository";
import { IAnimalsService } from "./interfaces/animals.service";

export class AnimalsService implements IAnimalsService {
    private readonly animalsRepository: IAnimalsRepository;
    private readonly modelCreationUtils: IModelCreationUtils;

    constructor(animalsRepository: IAnimalsRepository, modelCreationUtils: IModelCreationUtils) {
        this.animalsRepository = animalsRepository;
        this.modelCreationUtils = modelCreationUtils
    }

    async GetAll(): Promise<AnimalModel[]> {
        return await this.animalsRepository.GetAll();
    }
    
    async Insert(animal: SaveAnimalDto): Promise<string> {
        const animalModel = new AnimalModel(
            this.modelCreationUtils.CreateGuid(),
            animal.name,
            animal.species,
            animal.breed,
            animal.photo,
            animal.adopted,
            animal.userId
        );

        return await this.animalsRepository.Insert(animalModel);
        // retornar getById
    }
}