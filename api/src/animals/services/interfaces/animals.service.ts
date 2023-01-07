import { AnimalDto } from "../../dtos/animal.dto";
import { SaveAnimalDto } from "../../dtos/save.animal.dto";
import { AnimalModel } from "../../models/animals.model";

export interface IAnimalsService {
    GetAll(): Promise<AnimalModel[]>;
    Insert(animal: SaveAnimalDto): Promise<AnimalDto | undefined>;
    GetById(id: string): Promise<AnimalDto | undefined>;
    Delete(id: string): Promise<string | undefined>;
};