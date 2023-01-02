import { AnimalModel } from "../models/animals.model";

export interface IAnimalsService {
    getAll(): Promise<AnimalModel[]> // converter para outro objeto no futuro
}