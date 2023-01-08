import { Expose } from "class-transformer";
import { IsDefined } from "class-validator";

export class SaveAnimalDto {
    @IsDefined()
    @Expose()   
    name: string;

    @IsDefined()
    @Expose()
    species: string;

    @IsDefined()
    @Expose()
    breed: string;

    @IsDefined()
    @Expose()
    photo: string;

    @IsDefined()
    @Expose()
    adopted: boolean;

    @IsDefined()
    @Expose()
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