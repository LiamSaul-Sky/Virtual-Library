// import the Media class:
const Media = require("./classes/Media");

// create your Book class:
class Book extends Media{
    constructor(author, numPages, rating){
        this.author = author;
        this.numPages = numPages;
        this.rating = rating;
    }
    summary(){
        return `Title: ${Media.title}, Author: ${this.author}, Year: ${Media.year}, 
        Page Count" ${this.numPages}, Genre: ${Media.genre}, Rating: ${this.rating}`;
    }
    static highestRating(Book){
        let highestRated;
        for(let i = 0; i < Book.length; i++){
            if (highestRated == undefined){
                highestRated = Book[i];
            } else if (Book[i].rating > highestRated.rating){
                highestRated = Book[i].rating;
            }
        }
        return highestRated;
    }
}

// don't change below
module.exports = Book;
