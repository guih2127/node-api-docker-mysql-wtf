import ModelCreationUtils from "../../utils/model.creation.utils";
import { AnimalsRepository } from "../repositories/animals.repository";
import { AnimalsService } from "../services/animals.service"
import { animalsMock, newAnimalModelMock, newAnimalDtoMock, guidMockedValue } from "./mocks/animals.mock";

const animalsRepository = new AnimalsRepository(animalsMock);
const modelCreationUtils = new ModelCreationUtils();
const animalsService = new AnimalsService(animalsRepository, modelCreationUtils);

describe("AnimalsService", () => {
    describe("GetAll", () => {
        it("Should return all animals", async () => {
            const animals = await animalsService.GetAll();
            expect(animals).toBe(animalsMock)
        })
        it("Should return an empty array if there are no animals", async () => {
            animalsRepository.GetAll = jest.fn().mockReturnValueOnce([]);
            const result = await animalsService.GetAll();
            expect(result).toEqual([]);
        });
    });

    describe("Insert", () => {
        it ("Should insert an animal", async () => {
            animalsRepository.Insert = jest.fn().mockReturnValueOnce(newAnimalModelMock.id);
            modelCreationUtils.CreateGuid = jest.fn().mockReturnValueOnce(guidMockedValue);
            const result = await animalsService.Insert(newAnimalDtoMock);

            expect(animalsRepository.Insert).toHaveBeenCalledWith(newAnimalModelMock);
            expect(result).toEqual(newAnimalModelMock.id);
        })
    })
})