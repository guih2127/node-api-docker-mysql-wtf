import ModelCreationUtils from "../../../utils/model.creation.utils";
import { AnimalDto } from "../../dtos/animal.dto";
import { SaveAnimalDto } from "../../dtos/save.animal.dto";
import { AnimalModel } from "../../models/animals.model";

export const guidMockedValue1 = "111111";
export const guidMockedValue2 = "222222";
export const guidMockedValue3 = "333333";

export const animalsMock: AnimalModel[] = [
    new AnimalModel(
        guidMockedValue1,
        "Name 1", 
        "Species 1", 
        "Breed 1", 
        "Photo 1", 
        true, 
        ModelCreationUtils.CreateGuid()
    ),
    new AnimalModel(
        guidMockedValue2,
        "Name 2", 
        "Species 2", 
        "Breed 2", 
        "Photo 2", 
        false, 
        ModelCreationUtils.CreateGuid()
    )
];

export const newAnimalDtoMock = new SaveAnimalDto(
    "Name 3",
    "Species 3",
    "Breed 3",
    "Photo 3",
    false,
    ModelCreationUtils.CreateGuid()
);

export const animalDtoMock = new AnimalDto (
    guidMockedValue3,
    "Name 3",
    "Species 3",
    "Breed 3",
    "Photo 3",
    false,
    newAnimalDtoMock.userId
);

export const newAnimalModelMock = new AnimalModel(
    guidMockedValue3,
    "Name 3",
    "Species 3",
    "Breed 3",
    "Photo 3",
    false,
    newAnimalDtoMock.userId
);