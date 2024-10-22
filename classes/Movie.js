// import the Media class:
const Media = require('./classes/Media');

// create your Movie class:
class Movie{
    constructor(director, rating){
        this.director = director;
        this.rating = rating;
    }
    summary(){
        return `Title: ${Media.title}, Director: ${this.director}, Year: ${Media.year}, Genre: ${Media.genre}, Duration: ${Media.duration}, Rating: ${this.rating}`
    }
    static longestMovie(Movie){
        let longest;
        for(let i = 0; i < Movie.length; i++){
            if (longest == undefined){
                longest = Movie[i];
            } else if (Movie[i].rating > longest.rating){
                longest = Movie[i];
            }
        }
        return longest;

    }
}

// don't change below
module.exports = Movie;