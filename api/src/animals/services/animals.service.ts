import ModelCreationUtils from "../../utils/model.creation.utils";
import { AnimalDto } from "../dtos/animal.dto";
import { SaveAnimalDto } from "../dtos/save.animal.dto";
import { AnimalModel } from "../models/animals.model";
import { IAnimalsRepository } from "../repositories/interfaces/animals.repository";
import { IAnimalsService } from "./interfaces/animals.service";

export class AnimalsService implements IAnimalsService {
    private readonly animalsRepository: IAnimalsRepository;

    constructor(animalsRepository: IAnimalsRepository) {
        this.animalsRepository = animalsRepository
    }

    public async GetAll(): Promise<AnimalModel[]> {
        return await this.animalsRepository.GetAll();
    }
    
    public async Insert(animal: SaveAnimalDto): Promise<string> {
        const animalModel = new AnimalModel(
            ModelCreationUtils.CreateGuid(),
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

    public async GetById(id: string): Promise<AnimalDto | undefined> {
        const animal = await this.animalsRepository.GetById(id);

        if (animal) {
            const animalDto = new AnimalDto(
                animal?.id,
                animal.name,
                animal.species,
                animal.breed,
                animal.photo,
                animal.adopted,
                animal.userId
            );

            return animal;
        }

        return undefined;
    }
}