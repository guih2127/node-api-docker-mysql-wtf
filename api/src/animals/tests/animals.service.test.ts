import ModelCreationUtils from "../../utils/model.creation.utils";
import { AnimalsRepository } from "../repositories/animals.repository";
import { AnimalsService } from "../services/animals.service"
import { animalsMock, newAnimalModelMock, newAnimalDtoMock, guidMockedValue3, animalDtoMock } from "./mocks/animals.mock";

const animalsRepository = new AnimalsRepository(animalsMock);
const animalsService = new AnimalsService(animalsRepository);

describe("AnimalsService", () => {
    describe("GetAll", () => {
        it("Should return all animals", async () => {
            const animals = await animalsService.GetAll();
            expect(animals).toBe(animalsMock)
        });
        it("Should return an empty array if there are no animals", async () => {
            animalsRepository.GetAll = jest.fn().mockReturnValueOnce([]);
            const result = await animalsService.GetAll();
            expect(result).toEqual([]);
        });
    });

    describe("Insert", () => {
        it("Should insert an animal", async () => {
            animalsRepository.Insert = jest.fn().mockReturnValueOnce(newAnimalModelMock.id);
            ModelCreationUtils.CreateGuid = jest.fn().mockReturnValueOnce(guidMockedValue3);
            const result = await animalsService.Insert(newAnimalDtoMock);

            expect(animalsRepository.Insert).toHaveBeenCalledWith(newAnimalModelMock);
            expect(animalsRepository.Insert).toHaveBeenCalledTimes(1);
            expect(result).toEqual(newAnimalModelMock.id);
        });
    })

    describe("GetById", () => {
        it("Should get an animal by id", async () => {
            animalsRepository.GetById = jest.fn().mockReturnValueOnce(newAnimalModelMock);
            const result = await animalsService.GetById(guidMockedValue3);

            expect(animalsRepository.GetById).toHaveBeenCalledWith(guidMockedValue3);
            expect(animalsRepository.GetById).toHaveBeenCalledTimes(1);
            expect(result).toEqual(animalDtoMock);
        });
        it("Should return undefined if there is no animal with the id informed", async () => {
            animalsRepository.GetById = jest.fn().mockReturnValueOnce(undefined);
            const result = await animalsService.GetById("000000");

            expect(animalsRepository.GetById).toHaveBeenCalledWith("000000");
            expect(animalsRepository.GetById).toHaveBeenCalledTimes(1);
            expect(result).toEqual(undefined);
        })
    });
});