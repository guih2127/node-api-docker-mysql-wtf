import ModelCreationUtils from "../../utils/model.creation.utils";
import { AnimalDto } from "../dtos/animal.dto";
import { SaveAnimalDto } from "../dtos/save.animal.dto";
import AnimalsModelToDtoMapper from "../mappers/animals.model.to.dto.mapper";
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
        const animalModel = AnimalsModelToDtoMapper.MapSaveAnimalDtoToModel(animal);

        const insertedAnimalId = await this.animalsRepository.Insert(animalModel);
        const insertedAnimal = await this.animalsRepository.GetById(insertedAnimalId);

        if (insertedAnimal) {
            const animalDto = AnimalsModelToDtoMapper.MapModelToDto(insertedAnimal);
            return animalDto;
        }

        return undefined;
    }

    public async GetById(id: string): Promise<AnimalDto | undefined> {
        const animal = await this.animalsRepository.GetById(id);

        if (animal) {
            const animalDto = AnimalsModelToDtoMapper.MapModelToDto(animal);
            return animalDto;
        }

        return undefined;
    }

    public async Delete(id: string): Promise<string | undefined> {
        const deletedAnimalId = await this.animalsRepository.Delete(id);
        return deletedAnimalId;
    }
}