import { AnimalModel } from "../models/animals.model";
import { IAnimalsRepository } from "./interfaces/animals.repository";

export class AnimalsRepository implements IAnimalsRepository {
    private animals: AnimalModel[];

    constructor(animals?: AnimalModel[]) {
        this.animals = animals ?? [];
    }

    public async GetById(id: string): Promise<AnimalModel | undefined> {
        const animal = await this.animals.find(x => x.id == id);
        return animal;
    }

    public async Insert(animal: AnimalModel): Promise<string> {
        await this.animals.push(animal);
        return animal.id;
    }

    public async GetAll(): Promise<AnimalModel[]> {
        const animals = await this.animals;
        return animals;
    }
}