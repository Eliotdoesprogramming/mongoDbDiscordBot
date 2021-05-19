const { MongoClient } = require('mongodb');
const url = require('../dbinfo.json').url;
const dbName = require('../dbinfo.json').dbName;
const collection = 'Notes'
const notesRepo = () => {
    const makeNote = (note) => {
            return new Promise(async(resolve, reject) => {
                const client = new MongoClient(url, { useUnifiedTopology: true });
                try {
                    await client.connect();
                    const db = client.db(dbName);
                    let result = await db.collection(collection).insertOne(note);
                    resolve(result);
                    client.close();
                } catch (err) {
                    reject(err);
                }

            })
        }
        /**
         * 
         * @param {string} author 
         * @returns {Promise<any[]>}
         */
    const getNotes = (author) => {
        return new Promise(async(resolve, reject) => {
            const client = new MongoClient(url, { useUnifiedTopology: true });
            try {
                await client.connect();
                const db = client.db(dbName);
                let results = await db.collection(collection).find({ author: author }).toArray();
                resolve(results);
                client.close();
            } catch (err) {
                reject(err)
            }
        })
    }
    return { makeNote, getNotes }
}
module.exports = notesRepo();