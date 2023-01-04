import { SaveAnimalDto } from "../../dtos/save.animal.dto";
import { AnimalModel } from "../../models/animals.model";
import ModelCreationUtils from "../../../utils/model.creation.utils";

const modelCreationUtils = new ModelCreationUtils();

export const guidMockedValue: string = "111111";

export const animalsMock: AnimalModel[] = [
    new AnimalModel(
        modelCreationUtils.CreateGuid(),
        "Name 1", 
        "Species 1", 
        "Breed 1", 
        "Photo 1", 
        true, 
        modelCreationUtils.CreateGuid()
    ),
    new AnimalModel(
        modelCreationUtils.CreateGuid(),
        "Name 2", 
        "Species 2", 
        "Breed 2", 
        "Photo 2", 
        false, 
        modelCreationUtils.CreateGuid()
    )
];

export const newAnimalDtoMock = new SaveAnimalDto(
    "Name 3",
    "Species 3",
    "Breed 3",
    "Photo 3",
    false,
    modelCreationUtils.CreateGuid()
)

export const newAnimalModelMock = new AnimalModel(
    guidMockedValue,
    "Name 3",
    "Species 3",
    "Breed 3",
    "Photo 3",
    false,
    newAnimalDtoMock.userId
);