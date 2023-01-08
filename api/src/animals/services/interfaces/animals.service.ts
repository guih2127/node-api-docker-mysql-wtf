import BaseResult from "../../../results/base.result";
import { AnimalDto } from "../../dtos/animal.dto";
import { SaveAnimalDto } from "../../dtos/save.animal.dto";

export interface IAnimalsService {
    GetAll(): Promise<BaseResult<AnimalDto[]>>;
    Insert(animal: SaveAnimalDto): Promise<BaseResult<AnimalDto>>;
    GetById(id: string): Promise<BaseResult<AnimalDto>>;
    Delete(id: string): Promise<BaseResult<string>>;
};