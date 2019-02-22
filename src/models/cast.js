

export class Cast {
    constructor(image, name, character) {
        this.image = image;
        this.name = name;
        this.character = character;
    }

    getImagePath() {
        return this.image;
    }

    getName() {
        return this.name;
    }

    getCharacter() {
        return this.character;
    }
}