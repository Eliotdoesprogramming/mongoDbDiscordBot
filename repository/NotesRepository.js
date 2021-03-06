const { MongoClient } = require('mongodb');
require('dotenv').config()

const url = process.env.DB_URL;
const dbName = process.env.DB_DBNAME;
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
    const getNotes = (authorId) => {
        return new Promise(async(resolve, reject) => {
            const client = new MongoClient(url, { useUnifiedTopology: true });
            try {
                await client.connect();
                const db = client.db(dbName);
                let results = await db.collection(collection).find({ authorId: authorId }).toArray();
                resolve(results);
                client.close();
            } catch (err) {
                reject(err)
            }
        })
    }
    const clearNotes = (authorId) => {
        return new Promise(async(resolve, reject) => {
            const client = new MongoClient(url, { useUnifiedTopology: true });
            try {
                await client.connect();
                const db = client.db(dbName);
                let countDeleted = await db.collection(collection).deleteMany({ authorId: authorId });

                resolve(countDeleted.deletedCount);

            } catch (err) {
                reject(err)
            }

        })
    }
    return { makeNote, getNotes, clearNotes }
}
module.exports = notesRepo();