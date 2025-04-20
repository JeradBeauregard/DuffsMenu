// db connection using destructuring (oo big word)
const { connection } = require("../db"); 
const { ObjectId } = require("mongodb");

//read

async function ListStores(){
    const db = await connection();
    const stores = await db.collection("Stores").find().toArray();
    return stores;
}

async function ListStore(id){
    const db = await connection();
    const store = await db.collection("Stores").findOne({_id: new ObjectId(id)});
    return store;
}


//Create

async function AddStore(address,phone,open,closed){
    const db = await connection();
    const store = await db. collection("Stores").insertOne({
        address, phone, open, closed
    });
    return { _id: store.insertedId, address,phone,open,closed }; // return json of new created entry for api
}

//Update

async function EditStore(id,address,phone,open,closed){
    const db = await connection();
    const result = await db.collection("Stores").findOneAndUpdate(
        {_id: new ObjectId(id) },
        {$set: {address,phone,open,closed}},
        {returnDocument: "after"});
    
    return result;
}

//Delete

async function DeleteStore(id){
    const db = await connection();
    const result = await db.collection("Stores").findOneAndDelete({_id: new ObjectId(id)});
    return result;
}

module.exports = {
    ListStores,
    ListStore,
    EditStore,
    AddStore,
    DeleteStore
}