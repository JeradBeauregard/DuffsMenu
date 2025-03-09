# DuffsMenu
An express app CMS for Duffs Famous Wings
Includes CRUD functionality for information regarding Menu Items and Store information

## API Endpoints

Menu

GET: /MenuApi/ListMenuItems -> List of all menu items
GET: /MenuApi/ListMenuItem -> List one item by id. Id passed in request body (id: ObjectId)
POST: /MenuApi/AddMenuItem -> Add an item to the menu collection. Request body (name: , description:, price: , type: )
PUT: /MenuApi/EditMenuItem -> Edit a menu item by id. Request body (id: , name: , description:, price: , type: )
DELETE: /MenuApi/DeleteItem -> Delete a menu item by id.  Request body (id: ObjectId)

Stores

GET: /StoreApi/ListStores -> List all stores
GET: /StoreApi/ListStore -> List one store by id. Request body (id: ObjectId)
POST: /StoreApi/AddStore -> Add a store to the stores collection. Request Body (address: , phone: , open: , closed: )
PUT: /StoreApi/EditStore -> Edit a store by id. Request Body (id: , address: , phone: , open: , closed: )
DELETE: /StoreApi/DeleteStore -> Delete a store by id. Request Body (id: ObjectId)

