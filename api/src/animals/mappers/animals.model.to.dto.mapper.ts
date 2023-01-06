import ModelCreationUtils from "../../utils/model.creation.utils";
import { AnimalDto } from "../dtos/animal.dto";
import { SaveAnimalDto } from "../dtos/save.animal.dto";
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

    public static MapSaveAnimalDtoToModel(saveAnimalDto: SaveAnimalDto): AnimalModel {
        return new AnimalModel(
            ModelCreationUtils.CreateGuid(),
            saveAnimalDto.name,
            saveAnimalDto.species,
            saveAnimalDto.breed,
            saveAnimalDto.photo,
            saveAnimalDto.adopted,
            saveAnimalDto.userId
        );
    }
};