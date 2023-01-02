import { AnimalModel } from "../../models/animals.model";

export interface IAnimalsRepository {
    getAll(): Promise<AnimalModel[]>
}