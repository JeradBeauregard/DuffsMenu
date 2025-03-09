// router required
const express = require("express");
const router = express.Router();

// import store service
const storeService = require("../Services/StoreServices");



router.get("/ListStores", async (request,response)=>{
    const result = await storeService.ListStores();
    response.json(result);
});

router.get("/ListStore", async (request,response)=>{
    const { id } = request.body;
    const result = await storeService.ListStore(id);
    response.json(result);
});

router.post("/AddStore", async (request,response)=>{
    const {address,phone,open,closed} = request.body;
    const result = await storeService.AddStore(address,phone,open,closed);
    response.json(result);
})

router.put("/EditStore", async (request,response)=>{
    const {id,address,phone,open,closed} = request.body;
    result = await storeService.EditStore(id,address,phone,open,closed);
    response.json(result);
});

router.delete("/DeleteStore", async (request, response)=>{
    const { id } = request.body;
    result = await storeService.DeleteStore(id);
    response.json(result);
});

module.exports = router; // Export the router