export class SaveAnimalDto {
    name: string;
    species: string;
    breed: string;
    photo: string;
    adopted: boolean;
    userId: string;

    constructor(
        name: string, 
        species: string, 
        breed: string, 
        photo: string, 
        adopted: boolean, 
        userId: string
    ) {
        this.name = name;
        this.species = species;
        this.breed = breed;
        this.photo = photo;
        this.adopted = adopted;
        this.userId = userId;
        }
}