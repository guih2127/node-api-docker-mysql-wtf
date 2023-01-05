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
    
    public async Insert(animal: SaveAnimalDto): Promise<AnimalDto | undefined> {
        const animalModel = new AnimalModel(
            ModelCreationUtils.CreateGuid(),
            animal.name,
            animal.species,
            animal.breed,
            animal.photo,
            animal.adopted,
            animal.userId
        );

        const insertedAnimalId = await this.animalsRepository.Insert(animalModel);
        const insertedAnimal = await this.animalsRepository.GetById(insertedAnimalId);

        if (insertedAnimal) {
            const animalDto = new AnimalDto(
                insertedAnimal?.id,
                insertedAnimal.name,
                insertedAnimal.species,
                insertedAnimal.breed,
                insertedAnimal.photo,
                insertedAnimal.adopted,
                insertedAnimal.userId
            );

            return animalDto;
        }

        return undefined;
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

            return animalDto;
        }

        return undefined;
    }

    public async Delete(id: string): Promise<string | undefined> {
        const deletedAnimalId = await this.animalsRepository.Delete(id);
        return deletedAnimalId;
    }
}