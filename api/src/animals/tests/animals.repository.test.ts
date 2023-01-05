import { AnimalModel } from "../models/animals.model";
import { AnimalsRepository } from "../repositories/animals.repository";
import animalsMockObjects from "../tests/mocks/animals.mock.objects";

const animalsRepository = new AnimalsRepository();

describe("AnimalsRepository", () => {
    describe("GetAll", () => {
        it("Should return all the animals", async () => {
            const result = await animalsRepository.GetAll();
            expect(result).toEqual(animalsMockObjects.animalsMock);
        });
        it("Should return an empty array if there are no animals", async () => {
            animalsRepository.animals = [];
            const result = await animalsRepository.GetAll();
            expect(result).toEqual([]);
        })
    });

    describe("Insert", () => {
        it("Should insert an animal", async () => {
            animalsRepository.animals = [...animalsMockObjects.animalsMock];
            const result = await animalsRepository.Insert(animalsMockObjects.newAnimalModelMock);
            const animals = await animalsRepository.GetAll();

            expect(result).toEqual(animalsMockObjects.newAnimalModelMock.id);
            expect(animals.length).toEqual(animalsMockObjects.animalsMock.length + 1);
            expect(animals[animals.length - 1].id).toEqual(animalsMockObjects.newAnimalModelMock.id);
            expect(animals[animals.length - 1].adopted).toEqual(animalsMockObjects.newAnimalModelMock.adopted);
            expect(animals[animals.length - 1].breed).toEqual(animalsMockObjects.newAnimalModelMock.breed);
            expect(animals[animals.length - 1].name).toEqual(animalsMockObjects.newAnimalModelMock.name);
            expect(animals[animals.length - 1].species).toEqual(animalsMockObjects.newAnimalModelMock.species);
            expect(animals[animals.length - 1].userId).toEqual(animalsMockObjects.newAnimalModelMock.userId);
            expect(animals[animals.length - 1].photo).toEqual(animalsMockObjects.newAnimalModelMock.photo);
        })
    })

    describe("GetById", () => {
        it ("Should get an animal by id", async () => {
            const result = await animalsRepository.GetById(animalsMockObjects.guidMockedValue1);

            expect(result).toBeInstanceOf(AnimalModel);
            expect(result).toEqual(animalsMockObjects.animalsMock[0]);
        })
        it("Should return undefined if there is no animal with the id informed", async () => {
            const result = await animalsRepository.GetById(animalsMockObjects.guidMockedValueNonExistent);
            expect(result).toBeUndefined();
        })
    })

    describe("Delete", () => {
        it ("Should delete an animal", async () => {
            animalsRepository.animals = animalsMockObjects.animalsMock;
            const result = await animalsRepository.Delete(animalsMockObjects.guidMockedValue1);
            const animals = await animalsRepository.GetAll();

            expect(result).toEqual(animalsMockObjects.guidMockedValue1);
            expect(animals.length).toEqual(1);
        })
    })
});