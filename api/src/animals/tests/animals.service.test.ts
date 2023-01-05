import ModelCreationUtils from "../../utils/model.creation.utils";
import { AnimalDto } from "../dtos/animal.dto";
import { AnimalsRepository } from "../repositories/animals.repository";
import { AnimalsService } from "../services/animals.service";
import animalsMockObjects from "./mocks/animals.mock.objects";

const animalsRepository = new AnimalsRepository();
const animalsService = new AnimalsService(animalsRepository);

describe("AnimalsService", () => {
    describe("GetAll", () => {
        it("Should return all animals", async () => {
            const animals = await animalsService.GetAll();
            expect(animals).toBe(animalsMockObjects.animalsMock)
        });
        it("Should return an empty array if there are no animals", async () => {
            animalsRepository.GetAll = jest.fn().mockReturnValueOnce([]);
            const result = await animalsService.GetAll();
            expect(result).toEqual([]);
        });
    });

    describe("Insert", () => {
        it("Should insert an animal", async () => {
            animalsRepository.Insert = jest.fn().mockReturnValueOnce(animalsMockObjects.newAnimalModelMock.id);
            animalsRepository.GetById = jest.fn().mockReturnValueOnce(animalsMockObjects.newAnimalModelMock);
            ModelCreationUtils.CreateGuid = jest.fn().mockReturnValueOnce(animalsMockObjects.guidMockedValue3);
            const result = await animalsService.Insert(animalsMockObjects.newAnimalDtoMock);

            expect(animalsRepository.Insert).toHaveBeenCalledWith(animalsMockObjects.newAnimalModelMock);
            expect(animalsRepository.Insert).toHaveBeenCalledTimes(1);
            expect(animalsRepository.GetById).toHaveBeenCalledWith(animalsMockObjects.guidMockedValue3);
            expect(animalsRepository.GetById).toHaveBeenCalledTimes(1);
            expect(result).toEqual(animalsMockObjects.animalDtoMock);
        });
    })

    describe("GetById", () => {
        it("Should get an animal by id", async () => {
            animalsRepository.animals = [];
            animalsRepository.GetById = jest.fn().mockReturnValueOnce(animalsMockObjects.animalsMock[0]);
            const result = await animalsService.GetById(animalsMockObjects.guidMockedValue1);

            expect(animalsRepository.GetById).toHaveBeenCalledWith(animalsMockObjects.guidMockedValue1);
            expect(animalsRepository.GetById).toHaveBeenCalledTimes(1);
            expect(result).toBeInstanceOf(AnimalDto);
            expect(result).toEqual(animalsMockObjects.firstAnimalDtoMock);
        });
        it("Should return undefined if there is no animal with the id informed", async () => {
            animalsRepository.GetById = jest.fn().mockReturnValueOnce(undefined);
            const result = await animalsService.GetById(animalsMockObjects.guidMockedValueNonExistent);

            expect(animalsRepository.GetById).toHaveBeenCalledWith(animalsMockObjects.guidMockedValueNonExistent);
            expect(animalsRepository.GetById).toHaveBeenCalledTimes(1);
            expect(result).toEqual(undefined);
        })
    });
});