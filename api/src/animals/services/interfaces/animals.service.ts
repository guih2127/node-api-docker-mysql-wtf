import { AnimalModel } from "../../models/animals.model";
import { IAnimalsRepository } from "../../repositories/interfaces/animals.repository";
import { IAnimalsService } from "../animals.service";

export class AnimalsService implements IAnimalsService {
    private readonly animalsRepository: IAnimalsRepository;

    constructor(animalsRepository: IAnimalsRepository) {
        this.animalsRepository = animalsRepository;
    }

    async getAll(): Promise<AnimalModel[]> {
        return await this.animalsRepository.getAll();
    }

}