import FailResult from "../../results/fail.result";
import SuccessResult from "../../results/success.result";
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
            const result = await animalsService.GetAll();
            expect(result).toBeInstanceOf(SuccessResult<AnimalDto[]>);

            const resultResponse = result as SuccessResult<AnimalDto[]>;
            expect(resultResponse.statusCode).toEqual(200);
            expect(resultResponse.responseObject).toEqual(animalsMockObjects.animalsMock);
        });
        it("Should return an empty array if there are no animals", async () => {
            animalsRepository.GetAll = jest.fn().mockReturnValueOnce([]);
            const result = await animalsService.GetAll();

            const resultResponse = result as SuccessResult<AnimalDto[]>;
            expect(resultResponse.statusCode).toEqual(200);
            expect(resultResponse.responseObject).toEqual([]);
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
            expect(result).toBeInstanceOf(SuccessResult<AnimalDto>);

            const resultResponse = result as SuccessResult<AnimalDto>;
            expect(resultResponse.statusCode).toEqual(201);
            expect(resultResponse.responseObject).toEqual(animalsMockObjects.animalDtoMock);
        });
    });

    describe("GetById", () => {
        it("Should get an animal by id", async () => {
            animalsRepository.animals = [];
            animalsRepository.GetById = jest.fn().mockReturnValueOnce(animalsMockObjects.animalsMock[0]);
            const result = await animalsService.GetById(animalsMockObjects.guidMockedValue1);

            expect(animalsRepository.GetById).toHaveBeenCalledWith(animalsMockObjects.guidMockedValue1);
            expect(animalsRepository.GetById).toHaveBeenCalledTimes(1);
            expect(result).toBeInstanceOf(SuccessResult<AnimalDto>);

            const resultResponse = result as SuccessResult<AnimalDto>;
            expect(resultResponse.statusCode).toEqual(200);
            expect(resultResponse.responseObject).toEqual(animalsMockObjects.firstAnimalDtoMock);
        });
        it("Should return undefined if there is no animal with the id informed", async () => {
            animalsRepository.GetById = jest.fn().mockReturnValueOnce(undefined);
            const result = await animalsService.GetById(animalsMockObjects.guidMockedValueNonExistent);

            expect(animalsRepository.GetById).toHaveBeenCalledWith(animalsMockObjects.guidMockedValueNonExistent);
            expect(animalsRepository.GetById).toHaveBeenCalledTimes(1);
            expect(result).toBeInstanceOf(FailResult<AnimalDto>);

            const resultResponse = result as FailResult<AnimalDto>;
            expect(resultResponse.statusCode).toEqual(401);
        });
    });

    describe("Delete", () => {
        it("Should delete an animal", async () => {
            animalsRepository.Delete = jest.fn().mockReturnValueOnce(animalsMockObjects.guidMockedValue1);
            const result = await animalsService.Delete(animalsMockObjects.guidMockedValue1);

            expect(animalsRepository.Delete).toHaveBeenCalledWith(animalsMockObjects.guidMockedValue1);
            expect(animalsRepository.GetById).toHaveBeenCalledTimes(1);
            expect(result).toBeInstanceOf(SuccessResult<string>);

            const resultResponse = result as SuccessResult<string>;
            expect(resultResponse.statusCode).toEqual(204);
            expect(resultResponse.responseObject).toEqual(animalsMockObjects.guidMockedValue1);
        })
        it("Should return undefined if there is no animal with the id informed", async () => {
            animalsRepository.Delete = jest.fn().mockReturnValueOnce(undefined);
            const result = await animalsService.Delete(animalsMockObjects.guidMockedValueNonExistent);
            expect(animalsRepository.Delete).toHaveBeenCalledWith(animalsMockObjects.guidMockedValueNonExistent);

            const resultResponse = result as FailResult<string>;
            expect(resultResponse.statusCode).toEqual(500);
        })
    });
});