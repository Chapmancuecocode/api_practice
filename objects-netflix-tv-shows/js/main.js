//Create a Netflix TV Show class with a constructor that makes Netflix TV Shows with 4 properties and 3 methods

class TvShowCreator {
    constructor(showGenre, showSeason, showEpisodes, showOrigin) {
        this.genre = showGenre
        this.numberOfSeasons = showSeason
        this.numberOfEpisodes = showEpisodes
        this.countryOfOrigin = showOrigin
    }
    play() {
        console.log('Show is now playing')
    }
    pause() {
        console.log('Show is now paused')
    }
    favourite() {
        console.log('Show is now saved in favourites')
    }
}

let theOffice = new TvShowCreator('Comedy', '9 Seasons', '20 episodes', 'United States')
