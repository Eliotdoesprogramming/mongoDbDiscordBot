const { MongoClient } = require('mongodb');
require('dotenv').config()

const url = process.env.DB_URL;
const dbName = process.env.DB_DBNAME;
const collection = 'user_items'
const UserItemRepo = () => {
    const addItem = (authorId,username,itemId,itemName) => {
            return new Promise(async(resolve, reject) => {
                const client = new MongoClient(url, { useUnifiedTopology: true });
                try {
                    await client.connect();
                    const db = client.db(dbName);
                    let result = await db.collection(collection).insertOne({userId:authorId,username:username, itemId:itemId,itemName:itemName});
                    resolve(result);
                    client.close();
                } catch (err) {
                    reject(err.message);
                }

            })
        }
    /**
     * 
     * @param {string} author 
     * @returns {Promise<any[]>}
     */
    const getItems = (authorId) => {
        return new Promise(async(resolve, reject) => {
            const client = new MongoClient(url, { useUnifiedTopology: true });
            try {
                await client.connect();
                const db = client.db(dbName);
                let results = await db.collection(collection).find({ userId: authorId }).toArray();
                resolve(results);
                client.close();
            } catch (err) {
                reject(err.message)
            }
        })
    }
    const removeItem = (authorId,itemId) => {
        return new Promise(async(resolve, reject) => {
            const client = new MongoClient(url, { useUnifiedTopology: true });
            try {
                await client.connect();
                const db = client.db(dbName);
                let countDeleted = await db.collection(collection).deleteMany({ userId: authorId,itemId:itemId });
                
                resolve(countDeleted.deletedCount);

            } catch (err) {
                reject(err.message)
            }

        })
    }
    return { addItem,getItems,removeItem }
}
module.exports = UserItemRepo();