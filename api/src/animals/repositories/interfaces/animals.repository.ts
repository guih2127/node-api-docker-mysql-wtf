import { AnimalModel } from "../../models/animals.model";

export interface IAnimalsRepository {
    GetAll(): Promise<AnimalModel[]>;
    Insert(animal: AnimalModel): Promise<string>;
    GetById(id: string): Promise<AnimalModel | undefined>;
    Delete(id: string): Promise<string | undefined>;
}