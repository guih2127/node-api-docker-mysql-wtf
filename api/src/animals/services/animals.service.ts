import { AnimalDto } from "../dtos/animal.dto";
import { SaveAnimalDto } from "../dtos/save.animal.dto";
import AnimalsDtoToModelMapper from "../mappers/animals.dto.to.model.mapper";
import AnimalsModelToDtoMapper from "../mappers/animals.model.to.dto.mapper";
import { AnimalModel } from "../models/animals.model";
import { IAnimalsRepository } from "../repositories/interfaces/animals.repository";
import { IAnimalsService } from "./interfaces/animals.service";

export class AnimalsService implements IAnimalsService {
    private readonly animalsRepository: IAnimalsRepository;

    constructor(animalsRepository: IAnimalsRepository) {
        this.animalsRepository = animalsRepository
    }

    public async GetAll(): Promise<BaseResponse<AnimalModel[]>> {
        try {
            const animals = await this.animalsRepository.GetAll();
            return new BaseResponse(true, undefined, animals);
        } 
        catch (exception) {
            return new BaseResponse(false, "An error happened when trying to get the animals.");
        };
    };
    
    public async Insert(animal: SaveAnimalDto): Promise<BaseResponse<AnimalDto>> {
        try {
            const animalModel = AnimalsDtoToModelMapper.MapSaveAnimalDtoToModel(animal);

            const insertedAnimalId = await this.animalsRepository.Insert(animalModel);
            const insertedAnimal = await this.animalsRepository.GetById(insertedAnimalId);
    
            if (insertedAnimal) {
                const animalDto = AnimalsModelToDtoMapper.MapModelToDto(insertedAnimal);
                return new BaseResponse(true, undefined, animalDto);
            };

            return new BaseResponse(false, "An error happened when trying to insert the animal.");
        }
        catch (exception) {
            return new BaseResponse(false, "An error happened when trying to insert the animal.");
        };
    };

    public async GetById(id: string): Promise<BaseResponse<AnimalDto>> {
        try {
            const animal = await this.animalsRepository.GetById(id);

            if (animal) {
                const animalDto = AnimalsModelToDtoMapper.MapModelToDto(animal);
                return new BaseResponse(true, undefined, animalDto);
            };
    
            return new BaseResponse(false, "An error happened when trying to get the animal.");
        }
        catch (exception) {
            return new BaseResponse(false, "An error happened when trying to get the animal.");
        };
    };

    public async Delete(id: string): Promise<BaseResponse<string>> {
        try {
            const deletedAnimalId = await this.animalsRepository.Delete(id);
            return new BaseResponse(true, undefined, deletedAnimalId);
        }
        catch (exception) {
            return new BaseResponse(false, "An error happened when trying to delete the animal.");
        };
    };
};