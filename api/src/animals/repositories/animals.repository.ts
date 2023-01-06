import { AnimalModel } from "../models/animals.model";
import animalsMockObjects from "../tests/mocks/animals.mock.objects";
import { IAnimalsRepository } from "./interfaces/animals.repository";

export class AnimalsRepository implements IAnimalsRepository {
    public animals = animalsMockObjects.animalsMock;

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

    public async Delete(id: string): Promise<string | undefined> {
        const removeIndex = this.animals.findIndex(x => {
            return x.id === id 
        });

        if (removeIndex < 0)
            return undefined;
            
        const removedAnimal = this.animals.splice(removeIndex, 1);
        return removedAnimal[0].id;
    }
}