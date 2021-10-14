const db = require('../dbConfig')

class Movie {
    constructor(data){
        this.id = data.id
        this.name = data.name
        this.director = data.director
        this.review = data.review
    }

    static get all() {
        return new Promise (async (resolve, reject) => {
            try {
                const movieData = await db.query(`SELECT * FROM films;`)
                const movies = movieData.rows.map(d => new Movie(d))
                resolve(movies);
            } catch(err) {
                reject("Error retrieving movies")
            }
        })
    }

    static findById(id) {
        return new Promise (async (resolve, reject) => {
            try {
                const movieData = await db.query(`SELECT * FROM films WHERE id = $1`, [id]);
                const movie = new Movie(movieData.rows[0]);
                resolve(movie);
            } catch(err) {
                reject("Error finding movie")
            }
        })
    }

    static create(name, director, review){
        return new Promise (async (resolve, reject) => {
            try {
                let movieData = await db.query(`INSERT INTO films (name, director, review) VALUES ($1, $2, $3) RETURNING *;`, [ name, director, review ]);
                let newMovie = new Movie(movieData.rows[0]);
                resolve(newMovie);
            } catch(err) {
                reject("Error creating movie");
            }
        })
    }
}

module.exports = Movie;