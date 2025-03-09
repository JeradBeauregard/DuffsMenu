// db connection using destructuring (oo big word)
const { connection } = require("../db"); 
const { ObjectId } = require("mongodb");

//read

async function ListMenuItems(){
    const db = await connection();
    const menuItems = await db.collection("Menu").find().toArray();
    return menuItems;
}

async function ListMenuItem(id){
    const db = await connection();
    const menuItem = await db.collection("Menu").findOne({_id: new ObjectId(id)});
    return menuItem
}

//Create

async function AddMenuItem(name,description,price,type){
    const db = await connection();
    const menuItem = await db. collection("Menu").insertOne({
        name, description, price: Number(price), type
    });
    return { _id: menuItem.insertedId, name, description, price, type }; // return json of new created entry for api

}

//Update

async function EditMenuItem(id, name, description, price, type){
    const db = await connection();
    const result = await db.collection("Menu").findOneAndUpdate(
        {_id: new ObjectId(id) },
        {$set: {name,description,price: Number(price),type}}, //ensure price is a number or else it stores as a string and causes issues
        {returnDocument: "after"});// returns updated object, good for our api to have a json return
    
    return result;

}

//Delete

async function DeleteItem(id){
    const db = await connection();
    const result = await db.collection("Menu").findOneAndDelete({_id: new ObjectId(id)});
    return result;
}


module.exports = {

    ListMenuItems,
    ListMenuItem,
    EditMenuItem,
    AddMenuItem,
    DeleteItem
}
