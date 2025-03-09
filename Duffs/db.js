// db connection

const { MongoClient } = require("mongodb");
const dbUrl = process.env.MONGO_URI //default port is 27017
const client = new MongoClient(dbUrl);

async function connection() {
    await client.connect(); // Ensure the connection is established
    const db = client.db("Duffs"); // Get the database instance
    return db;
}

module.exports = { connection }