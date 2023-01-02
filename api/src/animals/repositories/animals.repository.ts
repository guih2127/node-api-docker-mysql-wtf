import { AnimalModel } from "../models/animals.model";
import { IAnimalsRepository } from "./interfaces/animals.repository";

export class AnimalsRepository implements IAnimalsRepository {
    animals: AnimalModel[] = [
        new AnimalModel("guid", "name", "species", "breed", "photo", false, "userId")
    ]
    async getAll(): Promise<AnimalModel[]> {
        return await this.animals;
    }
}