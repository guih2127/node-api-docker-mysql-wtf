import { AnimalsRepository } from "../repositories/animals.repository";
import { animalsMock, newAnimalModelMock } from "./mocks/animals.mock";

const animalsRepository = new AnimalsRepository(animalsMock);

describe("AnimalsRepository", () => {
    describe("GetAll", () => {
        it("Should return all the animals", async () => {
            const result = await animalsRepository.GetAll();
            expect(result).toEqual(animalsMock);
        });
        it("Should return an empty array if there are no animals", async () => {
            const animalsRepository = new AnimalsRepository();
            const result = await animalsRepository.GetAll();
            expect(result).toEqual([]);
        })
    });

    describe("Insert", () => {
        it("Should insert an animal", async () => {
            const result = await animalsRepository.Insert(newAnimalModelMock);
            const animals = await animalsRepository.GetAll();

            expect(result).toEqual(newAnimalModelMock.id);
            expect(animals.length).toEqual(3);
            expect(animals[2].id).toEqual(newAnimalModelMock.id);
            expect(animals[2].adopted).toEqual(newAnimalModelMock.adopted);
            expect(animals[2].breed).toEqual(newAnimalModelMock.breed);
            expect(animals[2].name).toEqual(newAnimalModelMock.name);
            expect(animals[2].species).toEqual(newAnimalModelMock.species);
            expect(animals[2].userId).toEqual(newAnimalModelMock.userId);
            expect(animals[2].photo).toEqual(newAnimalModelMock.photo);
        })
    })
});