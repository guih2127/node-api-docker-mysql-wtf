import { AnimalDto } from "../../dtos/animal.dto";
import { SaveAnimalDto } from "../../dtos/save.animal.dto";

export interface IAnimalsService {
    GetAll(): Promise<BaseResponse<AnimalDto[]>>;
    Insert(animal: SaveAnimalDto): Promise<BaseResponse<AnimalDto>>;
    GetById(id: string): Promise<BaseResponse<AnimalDto>>;
    Delete(id: string): Promise<BaseResponse<string>>;
};