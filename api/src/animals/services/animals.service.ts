import BaseResult from "../../results/base.result";
import FailResult from "../../results/fail.result";
import SuccessResult from "../../results/success.result";
import { AnimalDto } from "../dtos/animal.dto";
import { SaveAnimalDto } from "../dtos/save.animal.dto";
import AnimalsDtoToModelMapper from "../mappers/animals.dto.to.model.mapper";
import AnimalsModelToDtoMapper from "../mappers/animals.model.to.dto.mapper";
import { IAnimalsRepository } from "../repositories/interfaces/animals.repository";
import { IAnimalsService } from "./interfaces/animals.service";

export class AnimalsService implements IAnimalsService {
    private readonly animalsRepository: IAnimalsRepository;

    constructor(animalsRepository: IAnimalsRepository) {
        this.animalsRepository = animalsRepository;
    };

    public async GetAll(): Promise<BaseResult<AnimalDto[]>> {
        try {
            const animals = await this.animalsRepository.GetAll();
            const animalsDto = animals.map(x => {
                return AnimalsModelToDtoMapper.MapModelToDto(x);
            });

            return new SuccessResult(200, animalsDto);
        } catch (exception) {
            return new FailResult(500, "An error occurred when trying to get the animals.");
        };
    };
    
    public async Insert(animal: SaveAnimalDto): Promise<BaseResult<AnimalDto>> {
        try {
            const animalModel = AnimalsDtoToModelMapper.MapSaveAnimalDtoToModel(animal);

            const insertedAnimalId = await this.animalsRepository.Insert(animalModel);
            const insertedAnimal = await this.animalsRepository.GetById(insertedAnimalId);
    
            if (insertedAnimal) {
                const animalDto = AnimalsModelToDtoMapper.MapModelToDto(insertedAnimal);
                return new SuccessResult(201, animalDto);
            }

            return new FailResult(401, "The animal inserted could not be returned.");
        } catch (exception) {
            return new FailResult(500, "An error occurred when trying to insert the animal.");
        };
    };

    public async GetById(id: string): Promise<BaseResult<AnimalDto>> {
        try {
            const animal = await this.animalsRepository.GetById(id);

            if (animal) {
                const animalDto = AnimalsModelToDtoMapper.MapModelToDto(animal);
                return new SuccessResult(200, animalDto);
            }
    
            return new FailResult(404, "The animal was not found.");
        } catch (exception) {
            return new FailResult(500, "An error occurred when trying to get the animal.");
        };
    };

    public async Delete(id: string): Promise<BaseResult<string>> {
        try {
            const deletedAnimalId = await this.animalsRepository.Delete(id);

            if (deletedAnimalId)
                return new SuccessResult(204, deletedAnimalId);
            return new FailResult(500, "An error occurred when trying to delete the animal.");
        } catch (exception) {
            return new FailResult(500, "An error occurred when trying to delete the animal.");
        };
    };
};