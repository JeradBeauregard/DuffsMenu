
// router required
const express = require("express");
const router = express.Router();

// import Store Services
const storeService = require("../Services/StoreServices");

// list route

router.get("/List", async (request,response)=>{
    const stores = await storeService.ListStores();
    response.render("StorePages/List",{stores: stores});
});

// new route

router.get("/New", async (request,response)=>{
    response.render("StorePages/New");
});

router.post("/AddStore", async (request, resonse)=>{
    const { address } = request.body;
    const { phone } = request.body;
    const { open } = request.body;
    const { closed } = request.body;
    const result = await storeService.AddStore(address,phone,open,closed);
    resonse.redirect("/Stores/List");
});

// edit route

router.get("/Edit/:id", async (request,response)=>{
    const { id } = request.params
    const store = await storeService.ListStore(id);
    response.render("StorePages/Edit", {store: store});
});

router.post("/EditStore", async (request, response)=>{
    const { id } = request.body;
    const { address } = request.body;
    const { phone } = request.body;
    const { open } = request.body;
    const { closed } = request.body;

    const result = await storeService.EditStore(id,address,phone,open,closed);
    response.redirect("/Stores/List");


})

// Delete routes

router.get("/Delete/:id", async (request, response)=>{
const { id } = request.params;
const result = await storeService.DeleteStore(id);
response.redirect("/Stores/List");

});


module.exports = router; // Export the router