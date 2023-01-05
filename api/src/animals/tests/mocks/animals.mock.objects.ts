import ModelCreationUtils from "../../../utils/model.creation.utils";
import { AnimalDto } from "../../dtos/animal.dto";
import { SaveAnimalDto } from "../../dtos/save.animal.dto";
import { AnimalModel } from "../../models/animals.model";

class AnimalsMockObjects {
    public readonly guidMockedValueNonExistent = "000000";
    public readonly guidMockedValue1 = "111111";
    public readonly guidMockedValue2 = "222222";
    public readonly guidMockedValue3 = "333333";
    
    public readonly animalsMock: AnimalModel[] = [
        new AnimalModel(
            this.guidMockedValue1,
            "Name 1", 
            "Species 1", 
            "Breed 1", 
            "Photo 1", 
            true, 
            ModelCreationUtils.CreateGuid()
        ),
        new AnimalModel(
            this.guidMockedValue2,
            "Name 2", 
            "Species 2", 
            "Breed 2", 
            "Photo 2", 
            false, 
            ModelCreationUtils.CreateGuid()
        )
    ];
    
    public readonly newAnimalDtoMock = new SaveAnimalDto(
        "Name 3",
        "Species 3",
        "Breed 3",
        "Photo 3",
        false,
        ModelCreationUtils.CreateGuid()
    );
    
    public readonly firstAnimalDtoMock = new AnimalDto (
        this.guidMockedValue1,
        "Name 1",
        "Species 1",
        "Breed 1",
        "Photo 1",
        true,
        this.animalsMock[0].userId
    );
    
    
    public readonly animalDtoMock = new AnimalDto (
        this.guidMockedValue3,
        "Name 3",
        "Species 3",
        "Breed 3",
        "Photo 3",
        false,
        this.newAnimalDtoMock.userId
    );
    
    public readonly newAnimalModelMock = new AnimalModel(
        this.guidMockedValue3,
        "Name 3",
        "Species 3",
        "Breed 3",
        "Photo 3",
        false,
        this.newAnimalDtoMock.userId
    );
}

const animalsMockObjects = new AnimalsMockObjects();
export default animalsMockObjects;