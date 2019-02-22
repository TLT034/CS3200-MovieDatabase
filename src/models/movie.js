/*
 * Class to describe a single Movie
 */

export class Movie {
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

    getTitle() {
        return this.details.title;
    }

    getReleaseDate() {
        return this.details.release_date;
    }

    getPopularity() {
        return this.details.popularity;
    }

    getBriefOverview() {
        let briefOverview = this.details.overview.split(" ").splice(0, 8).join(" ");
        briefOverview += '...';
        return briefOverview;
    }

    getFullOverview() {
        return this.details.overview;
    }

    getGenres() {
        return this.details.genres;
    }

    getBudget() {
        return this.details.budget;
    }

    getRevenue() {
        return this.details.revenue;
    }

    getStatus() {
        return this.details.status;
    }
}