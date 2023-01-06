import ModelCreationUtils from "../../utils/model.creation.utils";
import { SaveAnimalDto } from "../dtos/save.animal.dto";
import { AnimalModel } from "../models/animals.model";

export default abstract class AnimalsDtoToModelMapper {
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