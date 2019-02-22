/*
 * Class to describe a single Person
 */

export class Person {
    constructor(details, imagePath) {
        this.details = details;
        this.imagePath = imagePath;
    }

    getID() {
        return this.details.id;
    }

    getImagePath() {
        return this.imagePath;
    }

    getName() {
        return this.details.name;
    }

    getBirthday() {
        return this.details.birthday;
    }

    getPopularity() {
        return this.details.popularity;
    }

    getDeathday() {
        if (this.details.deathday == null) {
            return 'N/A';
        }
        return this.details.deathday;
    }

    getPlaceOfBirth() {
        return this.details.place_of_birth;
    }

    getBiography() {
        return this.details.biography;
    }

}