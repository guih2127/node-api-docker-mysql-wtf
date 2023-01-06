import { AnimalDto } from "../dtos/animal.dto";
import { AnimalModel } from "../models/animals.model";

export default abstract class AnimalsModelToDtoMapper {
    public static MapModelToDto(animalModel: AnimalModel): AnimalDto {
        return new AnimalDto(
            animalModel.id,
            animalModel.name,
            animalModel.species,
            animalModel.breed,
            animalModel.photo,
            animalModel.adopted,
            animalModel.userId
        );
    };
};