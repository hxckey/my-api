const db = require('../dbConfig')

class Actor {
    constructor(data){
        this.id = data.id
        this.name = data.name
        this.films = data.films
        this.awards = data.awards
    }

    static get all() {
        return new Promise (async (resolve, reject) => {
            try {
                const actorData = await db.query(`SELECT * FROM actors;`)
                const actors = actorData.rows.map(d => new Actor(d))
                resolve(actors);
            } catch(err) {
                reject("Error retrieving actors")
            }
        })
    }

    static getById (id) {
        return new Promise (async (resolve, reject) => {
            try {
                const actorData = await db.query(`SELECT * FROM actors WHERE id = $1;`, [id]);
                const actor = new Actor(actorData.rows[0]);
                resolve(actor);
            } catch (err) {
                reject("Could not find actor by ID")
            }
        })
    }

    static create(name, films, awards){
        return new Promise (async (resolve, reject) => {
            try {
                let actorData = await db.query(`INSERT INTO actors (name, films, awards) VALUES ($1, $2, $3) RETURNING *;`, [ name, films, awards ]);
                let newActor = new Actor(actorData.rows[0]);
                resolve(newActor);
            } catch(err) {
                reject("Error creating actor");
            }
        })
    }
}

module.exports = Actor;