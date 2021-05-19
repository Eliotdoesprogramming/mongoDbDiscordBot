const { MongoClient } = require('mongodb');
const url = 'mongodb://localhost:27017'
const dbName = 'DiscordBot';
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
    return { makeNote }
}
module.exports = notesRepo();