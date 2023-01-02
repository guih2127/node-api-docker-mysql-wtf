export class AnimalModel {
    id: string;
    name: string;
    species: string;
    breed: string;
    photo: string;
    adopted: boolean;
    userId: string;

    constructor(
        id: string, 
        name: string, 
        species: string, 
        breed: string, 
        photo: string, 
        adopted: boolean, 
        userId: string
    ) {
        this.id = id;
        this.name = name;
        this.species = species;
        this.breed = breed;
        this.photo = photo;
        this.adopted = adopted;
        this.userId = userId;
        }
}