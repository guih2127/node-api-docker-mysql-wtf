import { AnimalModel } from "../models/animals.model";
import { IAnimalsRepository } from "./interfaces/animals.repository";

export class AnimalsRepository implements IAnimalsRepository {
    private animals: AnimalModel[];

    constructor(animals?: AnimalModel[]) {
        this.animals = animals ?? [];
    }

    async Insert(animal: AnimalModel): Promise<string> {
        await this.animals.push(animal);
        return animal.id;
    }

    async GetAll(): Promise<AnimalModel[]> {
        return await this.animals;
    }
}