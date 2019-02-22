

export class Credit {
    constructor(image, title, year) {
        this.image = image;
        this.title = title;
        this.year = year;
    }

    getImagePath() {
        return this.image;
    }

    getTitle() {
        return this.title;
    }

    getYear() {
        return this.year;
    }
}